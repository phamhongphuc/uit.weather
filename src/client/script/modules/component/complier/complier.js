import complierString from './complierString';
import router from './../../../router';

module.exports = function complier(component, from, to, watch, self, clear) {
    if (from === 'router') {
        router.push(to);
    } else if (typeof component[from] === 'string') {
        if (clear) {
            component[watch].forEach((eachWatch) => {
                eachWatch();
            });
        }
        const value = complierString(component[from], self, (parent, property) => {
            if (clear) {
                component[watch].push(parent.$watch(property, () => {
                    complier(component, from, to, watch, self, false);
                }));
            }
        });
        component[to] = value;
    } else {
        component[to] = component[from];
    }
};