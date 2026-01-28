import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/reducer/authReducer';

const registerSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data
      const mockUser = {
        id: '1',
        email: data.email,
        name: data.name,
        phone: data.phone,
        createdAt: new Date(),
      };

      const mockToken = 'mock-jwt-token-' + Date.now();

      dispatch(setUser({ user: mockUser, token: mockToken }));
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4 p-md-5">

              {/* Header */}
              <h2 className="fw-bold text-center mb-2">
                Create Account
              </h2>
              <p className="text-muted text-center mb-4">
                Join us and start ordering delicious meals
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} noValidate>

                {/* Full Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className={`form-control form-control-lg ${errors.name ? "is-invalid" : ""
                      }`}
                    placeholder="John Doe"
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
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className={`form-control form-control-lg ${errors.email ? "is-invalid" : ""
                      }`}
                    placeholder="your@email.com"
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
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className={`form-control form-control-lg ${errors.phone ? "is-invalid" : ""
                      }`}
                    placeholder="+1234567890"
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">
                      {errors.phone.message}
                    </div>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    className={`form-control form-control-lg ${errors.password ? "is-invalid" : ""
                      }`}
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Confirm Password
                  </label>
                  <input
                    {...register("confirmPassword")}
                    type="password"
                    className={`form-control form-control-lg ${errors.confirmPassword ? "is-invalid" : ""
                      }`}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg w-100"
                >
                  {isSubmitting && (
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    />
                  )}
                  {isSubmitting ? "Creating account..." : "Create Account"}
                </button>
              </form>

              {/* Footer */}
              <p className="text-center text-muted mt-4 mb-0">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="fw-semibold text-decoration-none"
                >
                  Sign in
                </Link>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}