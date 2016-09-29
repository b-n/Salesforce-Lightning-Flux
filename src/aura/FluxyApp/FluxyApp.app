<aura:application controller="FluxyAuraController">
    <aura:handler name="init" value="{!this}" action="{!c.doInit}" />
    <aura:handler name="ValueUpdate" event="c.FluxyEvent" action="{!c.updateAccount}" />
    
    <aura:attribute name="accounts" type="Object[]" />
    <aura:attribute name="tableConfig" type="Object[]" default="[ { value: 'Name', label: 'Name' }, { value: 'Rating', label: 'Account Rating' } ]" />
    
    <c:FluxyAccountTable accounts="{!v.accounts}"
                         config="{!v.tableConfig}"/>
    
    <c:FluxyOutput data="{!v.accounts}" />
	
</aura:application>