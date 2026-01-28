import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

// =====================
// Validation Schema
// =====================
const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  address: z.string().min(5, "Address is required"),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function ProfilePage() {
  const { user } = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address?.street || "",
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    console.log("Profile update:", data);
    alert("Profile updated successfully!");
  };

  return (
    <div className="container py-5">
      <h1 className="fw-bold display-5 mb-4 text-center">
        Your Profile
      </h1>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    {...register("name")}
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name.message}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Phone
                  </label>
                  <input
                    {...register("phone")}
                    className={`form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">
                      {errors.phone.message}
                    </div>
                  )}
                </div>

                {/* Address */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Address
                  </label>
                  <textarea
                    {...register("address")}
                    rows={3}
                    className={`form-control ${
                      errors.address ? "is-invalid" : ""
                    }`}
                  />
                  {errors.address && (
                    <div className="invalid-feedback">
                      {errors.address.message}
                    </div>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary w-100 btn-lg"
                >
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
