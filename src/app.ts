let implicitCoupon = 'pizza12';
let explicitCoupon: string = 'pizza21';

// ts infers type implicitly if we give value, else we should provide one
// because if in confusion, it will provide the type "any"