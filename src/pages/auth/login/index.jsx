import { Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Button, Typography } from "@/layouts/RegisterPage";
import Link from "next/link";
export default function index() {
  return (
    <div className="flex w-full justify-center h-screen items-center">
      <Card className="w-full max-w-[24rem] h-auto">
        <CardBody className="flex flex-col gap-4">
          <Input type="email" label="Email" size="lg" />
          <Input type="password" label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Dont have an account?
            <Link href="/auth/register">
              <Typography as="span" variant="small" color="blue" className="ml-1 font-bold">
                Register now
              </Typography>
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
