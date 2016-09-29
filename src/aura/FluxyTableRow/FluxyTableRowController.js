({
	doInit : function(component, event, helper) {
        const account = component.get('v.account');
        const config = component.get('v.config');
        
        config.forEach(item => {
            component.find(item.value).set('v.value', account[item.value]);
        });
    },
              
    valueUpdate : function(component, event, helper) {
    	var fieldName = event.getSource().getLocalId();
        var fieldValue = event.getSource().get('v.value');
        
        var e = component.getEvent("ValueUpdate");
        
        e.setParams({
            "recordId" : component.get('v.account').Id,
            "fieldName" : fieldName,
            "fieldValue" : fieldValue
        });
        
        e.fire(); 
    }
})