# Salesforce-Lightning-Flux
An example of a "flux" like implementation. No store, just utilising components in a flux like pattern

Feel free to log issues, or pull request.

Note: The components use ES6 functionality, so some functions might not work in older browsers. These can be transpiled to ES5 if need be.

## Why do this?
Because two way data binding can be a real pain sometimes.

Try the following:
* Bind an sObject list to an attribute
* Use AuraIteration over the sObject list to bind to a new component
* Bind the iterated sObject in the new component to a bunch of fields
* Use an aura:change handler on the object, and try and make it work for one field
* Edit a row in another component

Doing the above in lightning can be difficult due to how the data is bound to the item, and back down to the list. Using the flux idea, you control the flow of data, and can stop it from bubbling back up the chain when you don't want it to.
