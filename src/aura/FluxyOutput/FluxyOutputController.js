({
	calculateCounters : function(component, event, helper) {
        //count unique names, and save them to the counters  
        const data = component.get('v.data');
        
        const countersObject = data.reduce((prev, current) => {
            prev[current.Name] = prev[current.Name] ? prev[current.Name] + 1 : 1;
            return prev;
        }, {});
        
        let counters = [];
        for (let key of Object.keys(countersObject)) {
            counters = counters.concat({ group: key, count: countersObject[key] });
        }
        counters.sort((a, b) => b.count - a.count);
        component.set('v.counters', counters);
	}
})