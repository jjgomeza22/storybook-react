import './MyLabel.css';

interface Props {
    /**
     * Text to display
     */
    label: string;

    /**
     * Label size
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * allCaps: boolean
     */
    allCaps?: boolean,

    /**
     * color: 'text-primary' | 'text-secondary' | 'text-tertiary'
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary'

    /**
     * fontColor: string
     */
    fontColor?: string
}

export const MyLabel = ({ label, size, allCaps = false, color, fontColor }: Props) => {
  return (
    <span
        className={`${size} ${color}`}
        style={{ color: `${fontColor}` }}
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  );
};
