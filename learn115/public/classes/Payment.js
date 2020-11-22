class Payment {
    constructor(receipient, details, amount) {
        this.receipient = receipient;
        this.details = details;
        this.amount = amount;
        this.format = () => {
            return `${this.receipient} is owed $ ${this.amount} for ${this.details}`;
        };
    }
}
export default Payment;
