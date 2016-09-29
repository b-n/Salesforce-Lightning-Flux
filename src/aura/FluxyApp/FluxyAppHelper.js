({
	getAccounts : function(component) {
        const action = component.get('c.getAccounts');
        
        action.setCallback(this, response => {
            component.set('v.accounts', response.getReturnValue());
        });
		
        $A.enqueueAction(action);
	}
})