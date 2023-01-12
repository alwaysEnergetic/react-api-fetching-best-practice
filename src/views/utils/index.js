import * as values from "./constants";
import {individualFormStep} from "./formStep";

export function getSteps(kindForm) {
    if (kindForm === values.F_INDIVIDUAL){
        return individualFormStep;
    }    
}