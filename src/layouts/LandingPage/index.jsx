import CustomFooter from "@/components/CustomFooter";
import CustomNavbar from "@/components/CustomNavbar";

export default function index({ children }) {
    return (
        <div>
            <CustomNavbar />
            {children}
            <CustomFooter />
        </div>
    );
}
