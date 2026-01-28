import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/reducer/authReducer';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock user data
      const mockUser = {
        id: '1',
        email: data.email,
        name: 'John Doe',
        phone: '+1234567890',
        createdAt: new Date(),
      };

      const mockToken = 'mock-jwt-token-' + Date.now();

      dispatch(setUser({ user: mockUser, token: mockToken }));
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 justify-content-center">
        <div className="col-md-5 col-lg-4">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              {/* Header */}
              <h2 className="fw-bold text-center mb-2">Welcome Back</h2>
              <p className="text-muted text-center mb-4">
                Sign in to continue
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email address
                  </label>
                  <input
                    type="email"
                    className={`form-control form-control-lg ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="you@example.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control form-control-lg ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    placeholder="Enter password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                </div>

                {/* Options */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      Remember me
                    </label>
                  </div>

                  <Link
                    to="#"
                    className="text-decoration-none fw-semibold"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    />
                  ) : null}
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </button>
              </form>

              {/* Footer */}
              <p className="text-center text-muted mt-4 mb-0">
                Don’t have an account?{" "}
                <Link
                  to="/auth/register"
                  className="fw-semibold text-decoration-none"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}