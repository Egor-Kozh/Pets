import className from "classnames";
import styles from "../../button.module.scss";

interface SvgLoadingComponent {
  type: "svg_primary" | "svg_secondary" | "svg_flat";
}
const SvgLoadingComponent = ({ type }: SvgLoadingComponent) => {
  const svgClass = className(styles[type]);

  return (
    <svg
      width="21"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClass}
    >
      <path d="M10.5 0a.714.714 0 0 1 .714.714V5a.715.715 0 0 1-1.428 0V.714A.714.714 0 0 1 10.5 0Zm0 14.286a.715.715 0 0 1 .714.714v4.286a.715.715 0 0 1-1.428 0V15a.715.715 0 0 1 .714-.714ZM20.5 10a.715.715 0 0 1-.714.714H15.5a.715.715 0 0 1 0-1.428h4.286A.714.714 0 0 1 20.5 10ZM6.214 10a.715.715 0 0 1-.714.714H1.214a.715.715 0 0 1 0-1.428H5.5a.714.714 0 0 1 .714.714ZM3.43 2.929a.714.714 0 0 1 1.01 0L7.47 5.96a.714.714 0 0 1-1.01 1.01L3.43 3.939a.714.714 0 0 1 0-1.01ZM13.53 13.03a.714.714 0 0 1 1.01 0l3.031 3.031a.715.715 0 0 1-1.01 1.01L13.53 14.04a.714.714 0 0 1 0-1.01Zm4.041-10.1a.714.714 0 0 1 0 1.009L14.54 6.97a.714.714 0 0 1-1.01-1.01l3.031-3.031a.714.714 0 0 1 1.01 0ZM7.47 13.03a.714.714 0 0 1 0 1.01l-3.031 3.031a.714.714 0 0 1-1.01-1.01L6.46 13.03a.714.714 0 0 1 1.01 0Z" />
    </svg>
  );
};
export default SvgLoadingComponent;
