import AuthLayout from "@/components/auth/auth-layout"
import SignupForm from "@/components/auth/signup-form"

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create Account"
      description="Register a new ERP user account"
    >
      <SignupForm />
    </AuthLayout>
  )
}