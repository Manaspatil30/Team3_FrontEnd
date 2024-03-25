import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
export function withNavigate(Component) {
    return props => <Component {...props} navigate={useNavigate()} />;

}
export function withParam(Component) {
    return props => <Component {...props} params={useParams()} />;

}
export function withState(Component) {
    return props => <Component {...props} state={useLocation().state} />;

} 