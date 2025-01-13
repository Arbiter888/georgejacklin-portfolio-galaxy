import { PanelLeftIcon, NewspaperIcon, BriefcaseIcon, ClockIcon, FileTextIcon } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom"

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: PanelLeftIcon,
  },
  {
    title: "Projects",
    href: "/admin/projects",
    icon: BriefcaseIcon,
  },
  {
    title: "Blog Posts",
    href: "/admin/posts",
    icon: NewspaperIcon,
  },
  {
    title: "Timeline",
    href: "/admin/timeline",
    icon: ClockIcon,
  },
  {
    title: "CV Management",
    href: "/admin/cv",
    icon: FileTextIcon,
  },
]

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.href}
                  >
                    <Link to={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <main className="flex-1 p-6 bg-background">
          <div className="container mx-auto">
            <SidebarTrigger className="mb-4 lg:hidden" />
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}