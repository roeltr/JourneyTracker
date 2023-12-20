import { createElement, ReactElement, CSSProperties } from "react";
import { WebIcon } from "mendix";
import classNames from "classnames";

export interface IconInternalProps {
    key: number;
    icon: WebIcon | null;
    className?: string;
    fallback?: ReactElement;
    style?: CSSProperties;
}

// Mendix internal script for handeling the rendering of WebIcon
export const renderIcon = ({
    key,
    icon,
    className = "",
    style,
    fallback
}: IconInternalProps): ReactElement | null => {
    const commonProps = { key, style };
    if (icon?.type === "glyph") {
        return <span {...commonProps} className={classNames("glyphicon", icon.iconClass, className)} aria-hidden />;
    }
    if (icon?.type === "image") {
        return <img {...commonProps} src={icon.iconUrl} className={className} aria-hidden alt="" />;
    }
    if (icon?.type === "icon") {
        return <span {...commonProps} className={classNames(className, icon.iconClass)} aria-hidden />;
    }
    return fallback || null;
};