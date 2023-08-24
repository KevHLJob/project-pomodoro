import clsx from "clsx";
import { ComponentProps, FC } from "react";

//all buttons
type CustomProps = {
    color?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    variant?: 'contained' | 'outlined' | "text";
};

function getButtonStyles({ color = 'primary', size = 'md', variant = 'contained' }: CustomProps) {
    const stylesMap ={
        "primary-contained": 'btn-primary-contained',
        "primary-outlined": 'btn-primary-contained',
        "primary-text": 'btn-primary-contained',
        "secondary-contained": 'btn-primary-contained',
        "secondary-outlined": 'btn-primary-contained',
        "secondary-text": 'btn-primary-contained',
    };

    const sizeMap ={
        sm: 'px-8 py-2',
        md: 'px-12 py-4',
        lg: 'px-20 py-6'
    };
    return clsx(stylesMap[`${color}-${variant}`], sizeMap[size]);
}

type ButtonProps = ComponentProps<"button"> & CustomProps;

const Button: FC<ButtonProps> = (props) => {
    return < button
        className={clsx("rounded-full uppercase font-semibold text-xl",
            getButtonStyles({ color: props.color, size: props.size, variant: props.variant })
        )}
        {...props}
    />;
};

export default Button;