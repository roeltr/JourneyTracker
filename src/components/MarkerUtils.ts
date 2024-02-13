import { WebIcon } from "mendix";
import { HighLightEnum, MarkerListType } from "../../typings/JourneyTrackerProps";

export interface ConvertedMarker {
    markerName: string;
    showMarkerName: boolean;
    markerIcon: WebIcon;
    markerValue: number;
    markerAbove: boolean;
    addMarkerLine: boolean;
    highLight: HighLightEnum;
}

export function convertMarker(marker: MarkerListType): ConvertedMarker {
    const { markerName, showMarkerName, highLight, markerIcon, markerValue, markerAbove, addMarkerLine } = marker;
    return {
        markerName: markerName?.value || "",
        showMarkerName: Boolean(showMarkerName),
        highLight: highLight,
        markerIcon: markerIcon?.value,
        markerValue: Number(markerValue?.value) || 0,
        markerAbove: Boolean(markerAbove),
        addMarkerLine: Boolean(addMarkerLine)
    };
}