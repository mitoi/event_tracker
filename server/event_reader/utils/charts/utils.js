import  intersection  from 'lodash';
class Utils {


    static mapColorsToLabels = labels => {
        const COLORS = ['#1f77b4',
        '#ff7f0e',
        '#2ca02c',
        '#d62728',
        '#9467bd',
        '#8c564b',
        '#e377c2',
        '#7f7f7f',
        '#bcbd22',
        '#17becf']

        let labelColors = {}; // colors used for each label
        const usedKeys = intersection(Object.keys(labelColors), labels);
        let firstAvailColor = 0; // sensible place to start looking for new colors

        let chartColors = [];
        let usedColors = {};
        // get previously used colors for all labels in current report
        usedKeys.forEach(label => {
            usedColors[labelColors[label]] = true;
        });

        labels.forEach(label => {
            // if we've never seen this label before
            if (!labelColors[label]) {

                while (usedColors[COLORS[firstAvailColor]]) {
                    // if we are already using this color, get the next color
                    firstAvailColor += 1;
                }
                // if we are not already using this color, save it
                labelColors[label] = COLORS[firstAvailColor];
                firstAvailColor += 1;
            }

            // add color for new label to array that we will push to Chart.js
            chartColors.push(labelColors[label]);
        });

        // return 1D array of colors assigned to current labels
        return chartColors;
    };
}

export default Utils;
