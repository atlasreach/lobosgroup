"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone } from "lucide-react";

interface BookingFormProps {
  defaultService?: string;
}

const serviceOptions = {
  residential: [
    "Deep Cleaning",
    "Regular Cleaning - Weekly",
    "Regular Cleaning - Every 2 Weeks",
    "Regular Cleaning - Monthly",
    "Weighing my options / Not sure yet",
    "Other",
  ],
  commercial: [] as string[],
  "short-term-rentals": [] as string[],
  organization: [] as string[],
};

export default function BookingForm({ defaultService = "residential" }: BookingFormProps) {
  const [serviceCategory, setServiceCategory] = useState(defaultService);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    squareFootage: "",
    entireProperty: "yes",
    frequency: "",
    additionalDetails: "",
    consentTexts: false,
    acceptTerms: false,
  });

  useEffect(() => {
    // Pre-select first service option when category changes
    const services = serviceOptions[serviceCategory as keyof typeof serviceOptions];
    if (services && services.length > 0) {
      setFormData(prev => ({ ...prev, serviceType: services[0] }));
    }
  }, [serviceCategory]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission (GoHighLevel API or other)
    console.log("Form submitted:", { ...formData, serviceCategory });
    alert("Thank you! We'll contact you shortly.");
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const currentServices = serviceOptions[serviceCategory as keyof typeof serviceOptions] || [];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-12">
        <div className="space-y-2">
          <h2 className="text-6xl md:text-7xl font-light italic text-black" style={{ fontFamily: 'Georgia, serif' }}>
            Get in Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
            SEND US A MESSAGE
          </h3>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          If you're interested in getting a quote for cleaning services, please fill out
          the contact form below and tell us a little more about your project,
          property square footage, and the services you're interested in.
        </p>
        <a href="tel:504-447-4392">
          <Button className="bg-black hover:bg-black/90 text-white px-6 py-4 text-base">
            <Phone className="w-4 h-4 mr-2" />
            CALL US NOW
          </Button>
        </a>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-lg border shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
        <div className="space-y-2 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold uppercase">
            ARE YOU INTERESTED IN WORKING TOGETHER?
          </h3>
          <p className="text-xl font-semibold">GET A QUOTE TODAY!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-semibold">
              Complete Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              className="h-12"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-semibold">
              E-mail Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="h-12"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base font-semibold">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
              className="h-12"
            />
          </div>

          {/* Service Category */}
          <div className="space-y-2">
            <Label htmlFor="category" className="text-base font-semibold">
              Service Category
            </Label>
            <Select
              id="category"
              value={serviceCategory}
              onChange={(e) => setServiceCategory(e.target.value)}
              className="h-12"
            >
              <option value="residential">Residential Cleaning</option>
              <option value="commercial">Commercial Cleaning</option>
              <option value="short-term-rentals">Short-Term Rentals</option>
              <option value="organization">Organization Services</option>
            </Select>
          </div>

          {/* Type of Service - Only show for residential */}
          {serviceCategory === "residential" && (
            <div className="space-y-2">
              <Label htmlFor="serviceType" className="text-base font-semibold">
                Type of Service
              </Label>
              <Select
                id="serviceType"
                value={formData.serviceType}
                onChange={(e) => handleInputChange("serviceType", e.target.value)}
                className="h-12"
              >
                {currentServices.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </Select>
            </div>
          )}

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address" className="text-base font-semibold">
              Your Address/Location
            </Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              required
              className="h-12"
            />
          </div>

          {/* Square Footage */}
          {(serviceCategory === "residential" || serviceCategory === "commercial") && (
            <div className="space-y-2">
              <Label htmlFor="squareFootage" className="text-base font-semibold">
                Square Footage (Estimated)
              </Label>
              <Input
                id="squareFootage"
                type="number"
                placeholder="e.g., 1500"
                value={formData.squareFootage}
                onChange={(e) => handleInputChange("squareFootage", e.target.value)}
                className="h-12"
              />
            </div>
          )}

          {/* Entire Property Question */}
          {(serviceCategory === "residential" || serviceCategory === "commercial") && (
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                Do You Need the Entire {serviceCategory === "residential" ? "House" : "Building"} Cleaned?
              </Label>
              <RadioGroup
                value={formData.entireProperty}
                onValueChange={(value) => handleInputChange("entireProperty", value)}
              >
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="font-normal cursor-pointer">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="font-normal cursor-pointer">
                      No
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Additional Details */}
          <div className="space-y-2">
            <Label htmlFor="details" className="text-base font-semibold">
              Additional Details or Special Requests
            </Label>
            <Textarea
              id="details"
              value={formData.additionalDetails}
              onChange={(e) => handleInputChange("additionalDetails", e.target.value)}
              placeholder="Tell us more about your cleaning needs..."
              className="min-h-32"
            />
          </div>

          {/* Consent Checkboxes */}
          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={formData.consentTexts}
                onCheckedChange={(checked) => handleInputChange("consentTexts", checked as boolean)}
              />
              <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                I agree to receive automated text messages from Lobos Group regarding my appointments,
                services, or account at the phone number provided. Message and data rates may apply.
                Text STOP to opt out at any time. Consent is not a condition of purchase.
              </Label>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                required
              />
              <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                I accept the{" "}
                <span className="text-black font-semibold underline">Terms & Conditions</span> &{" "}
                <span className="text-black font-semibold underline">Privacy Policy</span>
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-black hover:bg-black/90 text-white h-14 text-lg font-semibold"
          >
            SUBMIT REQUEST
          </Button>
        </form>
      </div>
    </div>
  );
}
