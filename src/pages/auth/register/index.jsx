import { Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Button, Typography } from "@/layouts/RegisterPage";
import Link from "next/link";
export default function index() {
  return (
    <div>
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          test register
          <CardBody className="flex flex-col gap-4">
            <Input label="Name" size="lg" />
            <Input type="email" label="Email" size="lg" />
            <Input type="password" label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link href="/auth/login">
                <Typography as="span" variant="small" color="blue" className="ml-1 font-bold">
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
