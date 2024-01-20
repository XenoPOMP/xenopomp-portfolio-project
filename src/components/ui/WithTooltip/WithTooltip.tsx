import { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';
import { Tooltip } from 'react-tooltip';

import styles from './WithTooltip.module.scss';
import { WithTooltipProps } from './WithTooltip.props';

/**
 * This component is wrapper that adds tooltip.
 *
 * **This component is CLIENT-SIDE only!** (it uses useLayoutEffect hook.)
 *
 * @param children
 * @param className
 * @param id
 * @param content
 * @param placement
 * @constructor
 */
const WithTooltip: FC<
  PropsWith<'children' | 'className', WithTooltipProps>
> = ({ children, className, tooltip: { id, content, placement } }) => {
  return (
    <>
      <div
        data-tooltip-id={id}
        data-tooltip-content={content}
        data-tooltip-place={placement}
        className={cn(className)}
      >
        {children}
      </div>

      <Tooltip
        id={id}
        style={{
          borderRadius: '5px',
          zIndex: 5000,
        }}
        className={cn(
          '!bg-tooltip-bg !text-tooltip-font !opacity-100 dark-theme:shadow-2xl shadow-black/100'
        )}
      />
    </>
  );
};

export default WithTooltip;
