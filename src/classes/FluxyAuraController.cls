public class FluxyAuraController {
    @AuraEnabled
    public static List<Account> getAccounts() {
        return [ select Name, Rating from Account ];
    }
}