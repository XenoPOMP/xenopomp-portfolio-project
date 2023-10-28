import cn from 'classnames';
import Image from 'next/image';
import { ReactNode } from 'react';

import zustandIconImage from '@/public/icons/Zustand Icon.png';
import styles from '@/src/components/ui/ProjectView/ProjectView.module.scss';
import { StackTechnology } from '@/src/interfaces/IProject';

type Tech = {
  component: ReactNode;
  title: string;
};

const techIcons: Record<StackTechnology, Tech> = {
  react: {
    component: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={cn(styles.icon)}
      >
        <path
          d='M14.23 12.004C14.23 12.5968 13.9946 13.1654 13.5754 13.5847C13.1563 14.004 12.5879 14.2397 11.995 14.24C11.402 14.24 10.8332 14.0044 10.4139 13.5851C9.99458 13.1657 9.759 12.597 9.759 12.004C9.759 11.4111 9.99444 10.8425 10.4136 10.4232C10.8327 10.0039 11.4011 9.76823 11.994 9.76796C12.587 9.76796 13.1558 10.0035 13.5751 10.4229C13.9944 10.8422 14.23 11.4109 14.23 12.004ZM16.878 1.31396C15.532 1.31396 13.771 2.27397 11.99 3.93597C10.21 2.28297 8.448 1.33396 7.103 1.33396C6.693 1.33396 6.32 1.42696 5.997 1.61196C4.622 2.40496 4.314 4.87596 5.024 7.97696C1.98 8.91696 0 10.42 0 12.004C0 13.594 1.99 15.101 5.043 16.034C4.339 19.147 4.653 21.622 6.031 22.414C6.351 22.601 6.721 22.689 7.133 22.689C8.478 22.689 10.24 21.729 12.021 20.065C13.801 21.719 15.563 22.668 16.908 22.668C17.318 22.668 17.691 22.578 18.014 22.393C19.388 21.601 19.697 19.13 18.987 16.028C22.02 15.096 24 13.59 24 12.004C24 10.414 22.01 8.90696 18.957 7.97196C19.661 4.86196 19.347 2.38496 17.969 1.59196C17.651 1.40796 17.282 1.31496 16.878 1.31396ZM16.873 2.40396V2.40996C17.098 2.40996 17.279 2.45396 17.431 2.53696C18.097 2.91896 18.386 4.37196 18.161 6.24096C18.107 6.70096 18.019 7.18596 17.911 7.68096C16.951 7.44496 15.905 7.26396 14.804 7.14696C14.144 6.24196 13.459 5.41996 12.769 4.69996C14.361 3.21996 15.856 2.40796 16.874 2.40496L16.873 2.40396ZM7.103 2.42396C8.115 2.42396 9.617 3.23196 11.213 4.70396C10.527 5.42396 9.843 6.24096 9.193 7.14596C8.086 7.26296 7.039 7.44396 6.08 7.68396C5.968 7.19396 5.885 6.71996 5.826 6.26396C5.596 4.39596 5.88 2.94396 6.54 2.55696C6.73 2.46696 6.94 2.42896 7.103 2.42396ZM11.985 5.47396C12.44 5.94196 12.895 6.46596 13.345 7.03796C12.905 7.01796 12.455 7.00396 12 7.00396C11.54 7.00396 11.085 7.01396 10.64 7.03796C11.08 6.46596 11.535 5.94296 11.985 5.47396ZM12 8.09997C12.74 8.09997 13.477 8.13396 14.202 8.19296C14.608 8.77496 15.004 9.39597 15.385 10.053C15.757 10.693 16.095 11.343 16.403 11.999C16.095 12.654 15.757 13.309 15.39 13.949C15.01 14.609 14.617 15.237 14.21 15.819C13.482 15.882 12.744 15.917 12 15.917C11.26 15.917 10.523 15.882 9.798 15.824C9.392 15.242 8.996 14.62 8.615 13.964C8.243 13.324 7.905 12.674 7.597 12.018C7.9 11.361 8.243 10.705 8.61 10.064C8.99 9.40396 9.383 8.77796 9.79 8.19596C10.518 8.13196 11.256 8.09796 12 8.09796V8.09997ZM8.365 8.35396C8.125 8.73096 7.885 9.11696 7.661 9.51396C7.436 9.90396 7.226 10.296 7.026 10.688C6.761 10.032 6.536 9.37796 6.35 8.74096C6.99 8.59096 7.665 8.45696 8.365 8.35396ZM15.625 8.35396C16.32 8.45696 16.99 8.58396 17.631 8.74096C17.451 9.37296 17.226 10.023 16.971 10.674C16.771 10.284 16.561 9.89096 16.331 9.49996C16.106 9.10796 15.866 8.72596 15.626 8.35396H15.625ZM18.688 9.02896C19.172 9.17897 19.632 9.34597 20.063 9.52697C21.795 10.267 22.915 11.235 22.915 12.003C22.91 12.771 21.79 13.743 20.058 14.478C19.638 14.658 19.178 14.82 18.703 14.971C18.423 14.013 18.057 13.015 17.603 11.991C18.053 10.974 18.413 9.98097 18.688 9.02697V9.02896ZM5.293 9.03296C5.571 9.99296 5.938 10.99 6.393 12.013C5.943 13.03 5.581 14.023 5.307 14.977C4.823 14.827 4.363 14.659 3.937 14.477C2.205 13.74 1.085 12.771 1.085 12.003C1.085 11.235 2.205 10.261 3.937 9.52697C4.357 9.34697 4.817 9.18496 5.293 9.03296ZM16.971 13.313C17.236 13.97 17.461 14.625 17.647 15.261C17.007 15.418 16.331 15.551 15.631 15.651C15.871 15.276 16.111 14.889 16.336 14.493C16.561 14.103 16.77 13.705 16.971 13.313ZM7.026 13.333C7.226 13.725 7.436 14.116 7.666 14.508C7.896 14.898 8.131 15.28 8.371 15.651C7.676 15.549 7.006 15.421 6.365 15.265C6.545 14.635 6.771 13.983 7.025 13.332L7.026 13.333ZM17.92 16.32C18.032 16.813 18.12 17.288 18.174 17.743C18.404 19.611 18.12 21.063 17.46 21.451C17.313 21.541 17.122 21.579 16.897 21.579C15.885 21.579 14.383 20.772 12.787 19.299C13.473 18.579 14.157 17.763 14.807 16.859C15.914 16.741 16.961 16.56 17.92 16.32ZM6.09 16.33C7.05 16.564 8.096 16.745 9.197 16.862C9.857 17.767 10.542 18.589 11.232 19.308C9.637 20.791 8.14 21.603 7.122 21.603C6.902 21.598 6.716 21.553 6.569 21.471C5.903 21.091 5.614 19.637 5.839 17.768C5.893 17.308 5.982 16.824 6.09 16.33ZM10.65 16.97C11.09 16.99 11.54 17.004 11.995 17.004C12.455 17.004 12.91 16.994 13.355 16.97C12.915 17.542 12.46 18.065 12.01 18.535C11.555 18.065 11.1 17.542 10.65 16.97Z'
          fill='#61DAFB'
        />
      </svg>
    ),
    title: 'React',
  },
  vite: {
    component: (
      <svg
        className={cn(styles.icon)}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_85_8)'>
          <path
            d='M8.28609 10.578L8.79809 1.92098C8.80216 1.85324 8.82864 1.78878 8.87335 1.73773C8.91807 1.68668 8.97848 1.65194 9.04509 1.63898L17.3771 0.00597928C17.4286 -0.00412603 17.4817 -0.000837356 17.5316 0.0155298C17.5814 0.0318969 17.6262 0.0607931 17.6616 0.0994459C17.697 0.138099 17.722 0.185211 17.7339 0.236262C17.7459 0.287313 17.7446 0.340589 17.7301 0.390979L16.1721 5.79398C16.1576 5.84427 16.1563 5.89744 16.1683 5.94838C16.1802 5.99933 16.205 6.04637 16.2403 6.08499C16.2757 6.12361 16.3203 6.15253 16.37 6.16899C16.4196 6.18544 16.4727 6.18888 16.5241 6.17898L18.9121 5.71898C18.9683 5.70799 19.0264 5.71299 19.0799 5.7334C19.1334 5.75381 19.1801 5.78882 19.2147 5.83445C19.2493 5.88007 19.2704 5.93449 19.2756 5.9915C19.2808 6.04852 19.2699 6.10585 19.2441 6.15698L12.4541 19.707L12.3311 19.897C12.3046 19.94 12.2676 19.9755 12.2234 20C12.1793 20.0245 12.1296 20.0372 12.0791 20.037C11.9021 20.037 11.7291 19.885 11.7741 19.668L12.8691 14.367C12.8798 14.3151 12.8769 14.2612 12.8606 14.2108C12.8443 14.1603 12.8151 14.115 12.776 14.0792C12.7369 14.0434 12.6891 14.0184 12.6374 14.0066C12.5857 13.9948 12.5319 13.9967 12.4811 14.012L11.0481 14.447C10.9974 14.4624 10.9435 14.4644 10.8917 14.4528C10.84 14.4412 10.7922 14.4163 10.7529 14.3806C10.7137 14.3449 10.6844 14.2996 10.668 14.2492C10.6515 14.1988 10.6485 14.1449 10.6591 14.093L11.3491 10.718C11.3596 10.6676 11.3571 10.6154 11.3421 10.5662C11.327 10.517 11.2998 10.4723 11.2629 10.4365C11.226 10.4006 11.1806 10.3746 11.131 10.3608C11.0814 10.3471 11.0292 10.3461 10.9791 10.358L8.65909 10.894C8.61279 10.9046 8.56465 10.9043 8.51848 10.8931C8.4723 10.8819 8.42937 10.8601 8.39309 10.8295C8.3568 10.7988 8.32814 10.7601 8.3094 10.7165C8.29066 10.6728 8.28233 10.6254 8.28509 10.578H8.28609ZM23.2621 2.65198L17.2841 3.73998L16.7401 5.62698L18.8171 5.22698C18.978 5.19489 19.145 5.21309 19.2952 5.2791C19.4455 5.34511 19.5718 5.45574 19.6571 5.59598C19.7295 5.71261 19.7706 5.8459 19.7765 5.98303C19.7825 6.12016 19.7531 6.25651 19.6911 6.37898L12.9001 19.93L12.8871 19.955L12.8721 19.978L12.7501 20.168C12.678 20.2809 12.5787 20.374 12.4613 20.4387C12.3439 20.5033 12.2121 20.5374 12.0781 20.538C11.9567 20.5373 11.837 20.5099 11.7274 20.4577C11.6178 20.4055 11.5211 20.3298 11.4441 20.236C11.3692 20.1433 11.316 20.035 11.2883 19.9191C11.2606 19.8032 11.2592 19.6825 11.2841 19.566L12.3131 14.585L11.1931 14.925C11.0399 14.9711 10.8765 14.9709 10.7234 14.9242C10.5704 14.8776 10.4345 14.7867 10.3331 14.663C10.2575 14.5706 10.2034 14.4625 10.1749 14.3466C10.1463 14.2307 10.144 14.1099 10.1681 13.993L10.7981 10.913L8.77109 11.381C8.63387 11.4124 8.49083 11.4074 8.35612 11.3666C8.22141 11.3257 8.09972 11.2504 8.00309 11.148C7.92819 11.0679 7.87033 10.9734 7.83303 10.8702C7.79573 10.7671 7.77976 10.6575 7.78609 10.548L8.17509 3.97798L0.735092 2.64798C0.62046 2.62729 0.502306 2.63975 0.394509 2.68389C0.286712 2.72802 0.193749 2.80201 0.126542 2.89715C0.0593357 2.99229 0.0206759 3.10463 0.0151048 3.22098C0.00953374 3.33733 0.0372827 3.45285 0.0950919 3.55398L11.5801 23.691C11.6337 23.7852 11.7115 23.8635 11.8053 23.9179C11.8992 23.9722 12.0058 24.0006 12.1143 24.0002C12.2227 23.9998 12.3291 23.9706 12.4226 23.9156C12.516 23.8605 12.5931 23.7816 12.6461 23.687L23.9061 3.55198C23.9625 3.45067 23.989 3.33541 23.9825 3.21963C23.976 3.10385 23.9367 2.9923 23.8692 2.89799C23.8017 2.80368 23.7088 2.73048 23.6013 2.68693C23.4938 2.64338 23.3762 2.63125 23.2621 2.65198Z'
            fill='#646CFF'
          />
        </g>
        <defs>
          <clipPath id='clip0_85_8'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'Vite',
  },
  next: {
    component: (
      <svg
        className={cn(styles.icon)}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_85_12)'>
          <path
            d='M11.5723 0C11.396 0 11.2625 0.0013 11.2139 0.0067C11.1623 0.012 10.998 0.0277 10.8503 0.0395C7.4415 0.3468 4.2486 2.1858 2.2263 5.0123C1.1002 6.584 0.38 8.3666 0.108 10.255C0.0118 10.914 0 11.1087 0 12.0024C0 12.8961 0.012 13.0908 0.108 13.75C0.76 18.256 3.9671 22.0419 8.3167 23.4445C9.0956 23.6956 9.9167 23.8668 10.8504 23.97C11.214 24.01 12.7858 24.01 13.1494 23.97C14.7611 23.7917 16.1266 23.393 17.4731 22.7057C17.6796 22.6001 17.7195 22.572 17.6914 22.5484C17.6726 22.5345 16.7927 21.3546 15.7371 19.9284L13.8181 17.3364L11.4134 13.7781C10.0903 11.8217 9.0017 10.2221 8.9923 10.2221C8.9829 10.2195 8.9736 11.8008 8.9688 13.7311C8.9621 17.1113 8.9595 17.2473 8.9172 17.3271C8.8562 17.4421 8.8092 17.4889 8.7108 17.5405C8.6358 17.5779 8.57 17.585 8.2158 17.585H7.8098L7.702 17.517C7.63515 17.4751 7.58084 17.416 7.5448 17.3458L7.4955 17.2402L7.5008 12.5372L7.5075 7.8318L7.5801 7.7403C7.6177 7.691 7.6975 7.6278 7.7537 7.5973C7.8499 7.5503 7.8875 7.5456 8.2933 7.5456C8.772 7.5456 8.8517 7.5643 8.976 7.7003C9.0113 7.738 10.3133 9.699 11.871 12.0611C13.4482 14.4519 15.0263 16.8421 16.6054 19.2317L18.5056 22.1099L18.6016 22.0466C19.4534 21.493 20.3541 20.7048 21.0673 19.8839C22.5852 18.141 23.5636 16.0159 23.892 13.7499C23.9881 13.0908 23.9998 12.8959 23.9998 12.0024C23.9998 11.1087 23.9878 10.914 23.892 10.2548C23.2398 5.7488 20.0328 1.9629 15.6833 0.5603C14.9161 0.3116 14.0997 0.1403 13.1848 0.0371C13.0158 0.0195 12.1011 0.0004 11.5723 0ZM15.6408 7.217C15.9881 7.217 16.049 7.2223 16.1265 7.264C16.2392 7.3202 16.3305 7.4282 16.3635 7.5407C16.3821 7.6017 16.3869 8.906 16.3821 11.8451L16.3754 16.0626L15.6318 14.9226L14.8857 13.7826V10.7166C14.8857 8.7346 14.895 7.6203 14.9091 7.5664C14.9466 7.4351 15.0287 7.3318 15.1414 7.2709C15.2375 7.2215 15.2724 7.217 15.6408 7.217Z'
            fill='black'
          />
        </g>
        <defs>
          <clipPath id='clip0_85_12'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'Next 13',
  },
  'chrome-api': {
    component: (
      <svg
        className={cn(styles.icon)}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_85_16)'>
          <path
            d='M12 2.70888e-07C8.21002 2.70888e-07 4.83101 1.757 2.63201 4.501L6.58501 11.349C6.74399 10.0246 7.38281 8.80438 8.38063 7.91914C9.37846 7.0339 10.6661 6.54503 12 6.545H22.691C21.6854 4.57463 20.1547 2.92058 18.2681 1.76557C16.3814 0.610552 14.2122 -0.000469684 12 2.70888e-07ZM1.93101 5.47C0.667305 7.41316 -0.00363874 9.68207 1.48424e-05 12C1.48424e-05 18.012 4.42002 22.991 10.189 23.864L14.142 17.017C12.9157 17.5414 11.5397 17.5979 10.2746 17.1759C9.0094 16.7539 7.9429 15.8826 7.27701 14.727L1.93101 5.47ZM15.273 7.636C16.3411 8.43513 17.0787 9.59846 17.3459 10.9053C17.6132 12.2122 17.3916 13.5717 16.723 14.726L16.725 14.727H16.723L11.379 23.984C11.585 23.994 11.792 24 12 24C18.627 24 24 18.627 24 12C24 10.46 23.71 8.989 23.182 7.636H15.273ZM12 16.364C10.8426 16.364 9.73261 15.9042 8.9142 15.0858C8.09579 14.2674 7.63601 13.1574 7.63601 12C7.63601 10.8426 8.09579 9.7326 8.9142 8.91419C9.73261 8.09578 10.8426 7.636 12 7.636C13.1574 7.636 14.2674 8.09578 15.0858 8.91419C15.9042 9.7326 16.364 10.8426 16.364 12C16.364 13.1574 15.9042 14.2674 15.0858 15.0858C14.2674 15.9042 13.1574 16.364 12 16.364Z'
            fill='#4285F4'
          />
        </g>
        <defs>
          <clipPath id='clip0_85_16'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'Chrome API',
  },
  typescript: {
    title: 'TypeScript',
    component: (
      <svg
        className={cn(styles.icon)}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_85_20)'>
          <path
            d='M1.125 0C0.502 0 0 0.502 0 1.125V22.875C0 23.498 0.502 24 1.125 24H22.875C23.498 24 24 23.498 24 22.875V1.125C24 0.502 23.498 0 22.875 0H1.125ZM18.488 9.75C19.1 9.75 19.642 9.787 20.115 9.861C20.5611 9.92784 20.9989 10.0418 21.421 10.201V12.659C21.2184 12.5189 21.0031 12.398 20.778 12.298C20.5458 12.1935 20.3062 12.1066 20.061 12.038C19.5966 11.9086 19.1171 11.8413 18.635 11.838C18.335 11.838 18.062 11.866 17.816 11.924C17.5967 11.9709 17.3864 12.0526 17.193 12.166C17.023 12.27 16.893 12.395 16.8 12.54C16.7065 12.6861 16.6578 12.8565 16.66 13.03C16.66 13.226 16.713 13.403 16.816 13.559C16.92 13.715 17.068 13.863 17.259 14.003C17.45 14.143 17.682 14.279 17.955 14.413C18.228 14.548 18.537 14.687 18.881 14.829C19.351 15.026 19.773 15.236 20.147 15.457C20.521 15.679 20.842 15.93 21.11 16.21C21.378 16.489 21.582 16.808 21.724 17.167C21.866 17.526 21.938 17.943 21.938 18.42C21.938 19.077 21.813 19.63 21.565 20.076C21.3227 20.5159 20.975 20.8887 20.553 21.161C20.0982 21.4494 19.5941 21.6514 19.066 21.757C18.5 21.877 17.903 21.937 17.276 21.937C16.6589 21.9397 16.0429 21.8848 15.436 21.773C14.9109 21.6822 14.4017 21.5161 13.924 21.28V18.65C14.8278 19.4191 15.9743 19.8441 17.161 19.85C17.494 19.85 17.785 19.82 18.033 19.76C18.282 19.7 18.489 19.616 18.656 19.51C18.822 19.402 18.946 19.276 19.029 19.13C19.1207 18.96 19.1625 18.7675 19.1494 18.5748C19.1363 18.3821 19.0689 18.197 18.955 18.041C18.8064 17.8444 18.6247 17.6752 18.418 17.541C18.1617 17.3711 17.8917 17.2226 17.611 17.097C17.2782 16.945 16.9425 16.7997 16.604 16.661C15.686 16.278 15.002 15.809 14.551 15.256C14.101 14.703 13.875 14.034 13.875 13.251C13.875 12.637 13.998 12.11 14.244 11.669C14.49 11.228 14.824 10.865 15.248 10.58C15.6965 10.2841 16.1943 10.0711 16.718 9.951C17.298 9.81426 17.8921 9.74679 18.488 9.75ZM3.375 9.938H12.938V12.104H9.506V21.75H6.789V12.104H3.375V9.938Z'
            fill='#3178C6'
          />
        </g>
        <defs>
          <clipPath id='clip0_85_20'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  redux: {
    title: 'Redux',
    component: (
      <svg
        className={cn(styles.icon)}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_90_4)'>
          <path
            d='M16.634 16.504C17.504 16.429 18.177 15.664 18.134 14.75C18.087 13.836 17.338 13.102 16.425 13.102H16.364C15.9109 13.1182 15.4828 13.3136 15.1737 13.6453C14.8647 13.977 14.7001 14.4179 14.716 14.871C14.746 15.35 14.942 15.74 15.21 16.024C14.162 18.062 12.589 19.56 10.205 20.819C8.60199 21.657 6.90899 21.973 5.26099 21.749C3.88299 21.554 2.80499 20.939 2.14499 19.95C1.15699 18.451 1.06699 16.834 1.88999 15.216C2.48999 14.046 3.38899 13.193 3.98899 12.773C3.80786 12.2708 3.6674 11.7548 3.56899 11.23C-0.868014 14.408 -0.416014 18.752 0.931986 20.805C1.93599 22.303 3.98899 23.261 6.23599 23.261C6.83599 23.261 7.46599 23.217 8.07899 23.067C11.976 22.318 14.927 19.981 16.62 16.535L16.634 16.504ZM21.982 12.758C19.662 10.03 16.244 8.53199 12.348 8.53199H11.838C11.585 7.97799 11.001 7.633 10.34 7.633H10.295C9.35199 7.633 8.61699 8.44299 8.64799 9.38599C8.67799 10.284 9.44199 11.034 10.356 11.034H10.43C10.7542 11.0215 11.0679 10.9159 11.3337 10.7299C11.5995 10.5439 11.8062 10.2853 11.929 9.98499H12.484C14.793 9.98499 16.979 10.659 18.972 11.977C20.499 12.982 21.594 14.3 22.209 15.874C22.747 17.162 22.718 18.421 22.164 19.471C21.309 21.118 19.87 21.988 17.968 21.988C16.769 21.988 15.601 21.613 15.001 21.344C14.641 21.642 14.041 22.137 13.607 22.437C14.925 23.035 16.259 23.38 17.547 23.38C20.469 23.38 22.641 21.733 23.466 20.144C24.364 18.346 24.29 15.32 21.996 12.728L21.982 12.758ZM6.48999 17.042C6.51999 17.941 7.28299 18.69 8.19799 18.69H8.25799C8.48317 18.6849 8.70505 18.6348 8.91057 18.5427C9.11609 18.4505 9.30109 18.3181 9.45467 18.1534C9.60824 17.9886 9.72729 17.7948 9.8048 17.5833C9.88232 17.3718 9.91672 17.147 9.90599 16.922C9.90599 16.022 9.12699 15.275 8.21299 15.275H8.15299C8.09299 15.275 8.00299 15.275 7.92699 15.304C6.68399 13.206 6.15899 10.957 6.35499 8.53199C6.47499 6.70399 7.07499 5.115 8.15199 3.797C9.05199 2.673 10.745 2.117 11.899 2.089C15.135 2.028 16.484 6.06 16.588 7.663L18.086 8.113C17.741 3.197 14.686 0.619995 11.764 0.619995C9.01999 0.619995 6.48999 2.613 5.46999 5.535C4.07699 9.43 4.99099 13.177 6.69999 16.174C6.54999 16.369 6.45999 16.713 6.48999 17.042Z'
            fill='#764ABC'
          />
        </g>
        <defs>
          <clipPath id='clip0_90_4'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  zustand: {
    title: 'Zustand',
    component: (
      <Image
        src={zustandIconImage}
        alt={'Иконка Zustand'}
        className={cn(styles.icon)}
      />
    ),
  },
};

export default techIcons;
