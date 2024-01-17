import { Nullable } from '@xenopomp/advanced-types';

interface ClassWatcherOptions {
  classToWatch: string;
  classAddedCallback?: () => void;
  classRemovedCallback?: () => void;
}

export class ClassWatcher<T extends Element> implements ClassWatcherOptions {
  private targetNode: T;

  classToWatch: string;
  classAddedCallback?: ClassWatcherOptions['classAddedCallback'];
  classRemovedCallback?: ClassWatcherOptions['classRemovedCallback'];

  private observer: Nullable<MutationObserver> = null;
  private lastClassState: boolean = false;

  get isDark() {
    return this.lastClassState;
  }

  constructor(
    targetNode: T,
    {
      classToWatch,
      classRemovedCallback,
      classAddedCallback,
    }: ClassWatcherOptions
  ) {
    // Setup by constructor
    this.targetNode = targetNode;
    this.classToWatch = classToWatch;
    this.classAddedCallback = classAddedCallback;
    this.classRemovedCallback = classRemovedCallback;

    // Setup observer
    this.lastClassState = targetNode.classList.contains(this.classToWatch);

    this.init();
  }

  // Init observer
  init() {
    this.observer = new MutationObserver(this.mutationCallback);
    this.observe();
  }

  // Observe class changes
  observe() {
    this.observer?.observe(this.targetNode, { attributes: true });
  }

  // Disconnect observer
  disconnect() {
    this.observer?.disconnect();
  }

  mutationCallback: ConstructorParameters<typeof MutationObserver>[0] =
    mutationList => {
      for (let { type, attributeName, target } of mutationList) {
        // Wrong mutation type
        if (
          (type !== 'attributes' && attributeName !== 'class') ||
          !('classList' in target)
        ) {
          return;
        }

        let currentClassState = (target.classList as DOMTokenList).contains(
          this.classToWatch
        );

        // Mutation has not been executed
        if (this.lastClassState === currentClassState) {
          return;
        }

        this.lastClassState = currentClassState;

        if (currentClassState) {
          this.classAddedCallback?.();
        } else {
          this.classRemovedCallback?.();
        }
      }
    };
}
