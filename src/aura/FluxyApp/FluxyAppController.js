({
	doInit : function(component, event, helper) {
		helper.getAccounts(component);
	},
    
    updateAccount : function(component, event, helper) {
        //find the record, update the fieldName and value
        const recordId = event.getParam('recordId');
        const fieldName = event.getParam('fieldName');
        const fieldValue = event.getParam('fieldValue');
        
        const oldAccounts = component.get('v.accounts');
        
        const accounts = oldAccounts.map(account => {
            if (account.Id !== recordId) return account;
			account[fieldName] = fieldValue;
            return account;
        });
        
        component.set('v.accounts', accounts);
    }
})