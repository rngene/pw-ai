import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  zip: "",
};

type FormData = typeof initialForm;
type FormErrors = Partial<Record<keyof FormData, string>>;

interface CheckoutFormProps {
  itemCount: number;
  total: number;
  onPlaceOrder: () => void;
  onBack: () => void;
}

export default function CheckoutForm({ itemCount, total, onPlaceOrder, onBack }: CheckoutFormProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim()) errs.lastName = "Last name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address";
    if (!form.address.trim()) errs.address = "Address is required";
    if (!form.city.trim()) errs.city = "City is required";
    if (!form.zip.trim()) errs.zip = "ZIP code is required";
    else if (!/^\d{5}$/.test(form.zip))
      errs.zip = "ZIP code must be 5 digits";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      onPlaceOrder();
    }
  };

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const fields: { id: keyof FormData; label: string; type: string }[] = [
    { id: "firstName", label: "First Name", type: "text" },
    { id: "lastName", label: "Last Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "address", label: "Address", type: "text" },
    { id: "city", label: "City", type: "text" },
    { id: "zip", label: "ZIP Code", type: "text" },
  ];

  return (
    <div className="checkout">
      <button className="back-link" onClick={onBack}>
        ← Back to Cart
      </button>
      <div className="order-banner">
        {itemCount} item{itemCount !== 1 ? "s" : ""} — ${total.toFixed(2)}
      </div>
      <h2>Shipping Information</h2>
      <form onSubmit={handleSubmit} noValidate>
        {fields.map(({ id, label, type }) => (
          <div className="form-group" key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              id={id}
              type={type}
              value={form[id]}
              onChange={handleChange(id)}
              className={errors[id] ? "input-error" : ""}
            />
            {errors[id] && (
              <span className="field-error" role="alert">
                {errors[id]}
              </span>
            )}
          </div>
        ))}
        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>
    </div>
  );
}
