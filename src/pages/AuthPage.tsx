import PageLayout from "../components/layout/PageLayout";
import AuthForm from "../components/auth/AuthForm";


const AuthPage = () => (
  <PageLayout>
    <main className="auth-page__main">
      <AuthForm />      
    </main>
  </PageLayout>
);

export default AuthPage;