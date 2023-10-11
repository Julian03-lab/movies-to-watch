import { JSX, SVGProps } from "react";

export function StarIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.986 8.474l-2.532-5.49a.5.5 0 00-.908 0l-2.533 5.49a.5.5 0 01-.395.287l-6.003.712a.5.5 0 00-.281.864l4.439 4.105a.5.5 0 01.15.464l-1.178 5.93a.5.5 0 00.735.534l5.275-2.953a.5.5 0 01.489 0l5.276 2.953a.5.5 0 00.734-.534l-1.178-5.93a.5.5 0 01.15-.464l4.44-4.105a.5.5 0 00-.281-.864l-6.004-.712a.5.5 0 01-.395-.287z"
      ></path>
    </svg>
  );
}

export function AddIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke={props.stroke || "#171740"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
      ></path>
      <path
        stroke={props.stroke || "#171740"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 12h8M12 16V8"
      ></path>
    </svg>
  );
}

export function CloseIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 18L6 6M18 6L6 18"
      ></path>
    </svg>
  );
}

export const SearchIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  );
};

export function BackArrow(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12H3M8 17l-5-5 5-5"
      ></path>
    </svg>
  );
}
