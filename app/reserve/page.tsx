"use client";

import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

/* ---------- SIZE CONVERSION TABLE ---------- */

type SizeRow = {
  eu: number;
  uk: number;
  us: number;
  cm: number;
};

const sizeChart: SizeRow[] = [
  { eu: 36, uk: 3.5, us: 4.5, cm: 22.5 },
  { eu: 37, uk: 4,   us: 5,   cm: 23 },
  { eu: 38, uk: 5,   us: 6,   cm: 24 },
  { eu: 39, uk: 6,   us: 7,   cm: 25 },
  { eu: 40, uk: 6.5, us: 7.5, cm: 25.5 },
  { eu: 41, uk: 7.5, us: 8.5, cm: 26.5 },
  { eu: 42, uk: 8,   us: 9,   cm: 27 },
  { eu: 43, uk: 9,   us: 10,  cm: 28 },
  { eu: 44, uk: 9.5, us: 10.5,cm: 28.5 },
  { eu: 45, uk: 10.5,us: 11.5,cm: 29.5 },
  { eu: 46, uk: 11,  us: 12,  cm: 30 },
  { eu: 47, uk: 12,  us: 13,  cm: 31 },
  { eu: 48, uk: 13,  us: 14,  cm: 32 },
  { eu: 49, uk: 14,  us: 15,  cm: 33 },
  { eu: 50, uk: 15,  us: 16,  cm: 34 },
];

const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda",
  "Argentina","Armenia","Australia","Austria","Azerbaijan",
  "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize",
  "Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil",
  "Brunei","Bulgaria","Burkina Faso","Burundi",
  "Cambodia","Cameroon","Canada","Cape Verde","Central African Republic",
  "Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica",
  "Croatia","Cuba","Cyprus","Czech Republic",
  "Denmark","Djibouti","Dominica","Dominican Republic",
  "Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia",
  "Eswatini","Ethiopia",
  "Fiji","Finland","France",
  "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala",
  "Guinea","Guinea-Bissau","Guyana",
  "Haiti","Honduras","Hungary",
  "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
  "Jamaica","Japan","Jordan",
  "Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan",
  "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein",
  "Lithuania","Luxembourg",
  "Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands",
  "Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia",
  "Montenegro","Morocco","Mozambique","Myanmar",
  "Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger",
  "Nigeria","North Korea","North Macedonia","Norway",
  "Oman",
  "Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru",
  "Philippines","Poland","Portugal",
  "Qatar",
  "Romania","Russia","Rwanda",
  "Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines",
  "Samoa","San Marino","Saudi Arabia","Senegal","Serbia","Seychelles",
  "Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands",
  "Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka",
  "Sudan","Suriname","Sweden","Switzerland","Syria",
  "Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga",
  "Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",
  "Uganda","Ukraine","United Arab Emirates","United Kingdom",
  "United States","Uruguay","Uzbekistan",
  "Vanuatu","Vatican City","Venezuela","Vietnam",
  "Yemen",
  "Zambia","Zimbabwe"
];

/* Helper to convert country names to ISO 2-letter codes for PayPal */
function getCountryCode(countryName: string): string {
  const mapping: { [key: string]: string } = {
    "United States": "US", "United Kingdom": "GB", "Germany": "DE", "France": "FR", 
    "Italy": "IT", "Spain": "ES", "Canada": "CA", "Japan": "JP", "Australia": "AU",
    "Netherlands": "NL", "China": "CN", "South Korea": "KR"
  };
  return mapping[countryName] || "US"; // Default to US if not found
}

function getSizeSystem(country: string): "uk" | "us" | "eu" | "cm" {
  if (["United States", "Canada"].includes(country)) return "us";
  if (["Germany", "France", "Italy", "Spain", "Netherlands"].includes(country)) return "eu";
  if (["Japan", "South Korea"].includes(country)) return "cm";
  return "uk";
}

/* ---------- PAGE ---------- */

export default function ReservePage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    selectedSize: "",
    euSize: "",
    customSize: "",
    billingSameAsShipping: true,
  });

  const sizeSystem = getSizeSystem(form.country);
  const visibleSizes = sizeChart.map(row => String(row[sizeSystem]));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setForm({ 
        ...form, 
        [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value 
    });
  };

  const handleSizeSelect = (value: string) => {
    if (value === "CUSTOM") {
      setForm({ ...form, selectedSize: "CUSTOM", euSize: "" });
      return;
    }

    const row = sizeChart.find(r => String(r[sizeSystem]) === value);

    setForm({
      ...form,
      selectedSize: value,
      euSize: row ? String(row.eu) : "",
      customSize: "",
    });
  };

  const isValid =
    form.fullName &&
    form.email &&
    form.country &&
    form.address &&
    (form.euSize || form.customSize);

  return (
    <main className="min-h-screen bg-black text-white flex justify-center px-6 py-32">
      <div className="max-w-3xl w-full space-y-12">

        <h1 className="text-3xl font-bold tracking-widest text-center">
          Reserve X-Night
        </h1>

        {/* FORM */}
        <div className="grid md:grid-cols-2 gap-6">

          <input name="fullName" placeholder="Full Name" onChange={handleChange} className="input" />
          <input name="email" placeholder="Email" onChange={handleChange} className="input" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="input" />

          <select name="country" onChange={handleChange} className="input">
            <option value="">Select Country</option>
            {countries.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <input name="city" placeholder="City" onChange={handleChange} className="input" />
          <input name="postalCode" placeholder="Postal Code" onChange={handleChange} className="input" />
          <input name="address" placeholder="Full Address" onChange={handleChange} className="input md:col-span-2" />

          {/* BILLING TOGGLE */}
          <div className="md:col-span-2 flex items-center space-x-3 py-2">
            <input 
              type="checkbox" 
              name="billingSameAsShipping" 
              id="billingSame"
              checked={form.billingSameAsShipping}
              onChange={handleChange}
              className="w-5 h-5 accent-red-700 cursor-pointer"
            />
            <label htmlFor="billingSame" className="text-sm text-gray-400 cursor-pointer">
              Billing address is the same as shipping
            </label>
          </div>

          {/* SIZE SELECT */}
          <select
            className="input md:col-span-2"
            value={form.selectedSize}
            onChange={(e) => handleSizeSelect(e.target.value)}
            disabled={!form.country}
          >
            <option value="">
              {form.country ? "Select Shoe Size" : "Select Country First"}
            </option>

            {visibleSizes.map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}

            <option value="CUSTOM">Custom Size</option>
          </select>

          {/* CUSTOM SIZE INPUT */}
          {form.selectedSize === "CUSTOM" && (
            <input
              name="customSize"
              placeholder="Enter your custom size (example: EU 52 / Wide 44 / 28.3 cm)"
              onChange={handleChange}
              className="input md:col-span-2 border-yellow-600"
            />
          )}

          {/* INTERNAL SIZE INFO */}
          {form.euSize && (
            <p className="text-gray-400 md:col-span-2 text-sm">
              Internal manufacturing size: EU {form.euSize}
            </p>
          )}
        </div>

        {/* PAYMENT */}
        <div className="flex justify-center pt-10">
          {isValid ? (
            <div className="w-full max-w-md">
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    intent: "CAPTURE",
                    payer: {
                      name: {
                        given_name: form.fullName.split(" ")[0],
                        surname: form.fullName.split(" ").slice(1).join(" ")
                      },
                      email_address: form.email,
                      address: form.billingSameAsShipping ? {
                        address_line_1: form.address,
                        admin_area_2: form.city,
                        postal_code: form.postalCode,
                        country_code: getCountryCode(form.country),
                      } : undefined
                    },
                    purchase_units: [
                      {
                        amount: {
                          currency_code: "USD",
                          value: "1999.00",
                        },
                        shipping: {
                          name: { full_name: form.fullName },
                          address: {
                            address_line_1: form.address,
                            admin_area_2: form.city,
                            postal_code: form.postalCode,
                            country_code: getCountryCode(form.country),
                          }
                        }
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions!.order!.capture().then(() => {
                    alert("Payment successful! Order received.");
                  });
                }}
              />
            </div>
          ) : (
            <p className="text-gray-400">
              Please complete all required fields to continue.
            </p>
          )}
        </div>
      </div>

      <style jsx global>{`
        .input {
          background: black;
          border: 1px solid #333;
          padding: 14px;
          border-radius: 6px;
          outline: none;
          color: white;
        }
        .input:focus {
          border-color: #b91c1c;
        }
      `}</style>
    </main>
  );
}