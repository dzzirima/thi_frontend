import { Heading, HeadingGroup, Text } from "rsuite";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from 'next/link'

export default function TopBar() {
  return (
    <div className=" flex flex-row justify-between p-8">
      <div className="rightSide">
        <HeadingGroup>
          <Typography variant="h4" className="text-blue-600">
            Delivery Guy
          </Typography>
          {/* <Heading>DeliveryExpress</Heading> */}
          {/* <Text size="sm" muted>
            The leaders in arbitrary fast delivery since 1920
          </Text> */}

           <Text size="sm" muted>
            You call us , we deliver 
          </Text>
        </HeadingGroup>
      </div>
      <div className=" flex leftSide space-x-4">
        <div>
          <Link href= "/login">
          <Button variant="text">Login</Button>
          </Link>
        
        </div> 
        <div>
          <Button variant="outlined">Contact Us</Button>
        </div>
        <div>
        <Link href="/dashboard">
          <Button  variant="contained">Get Started</Button>
        </Link>
          {/* <Button type="" variant="contained">Get Started</Button> */}
        </div>
      </div>
    </div>
  );
}
