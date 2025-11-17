import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const LogoutBtn = () => {
  const logout = async () => {
    "use server";
    await signOut();
  };

  return (
    <div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};
export default LogoutBtn;
