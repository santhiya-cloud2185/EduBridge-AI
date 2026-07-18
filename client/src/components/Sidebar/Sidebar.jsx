import {
    LayoutDashboard,
    BrainCircuit,
    Map,
    Target,
    FileText,
    BriefcaseBusiness,
    GraduationCap
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard"
    },
    {
        name: "Career Recommendation",
        icon: BrainCircuit,
        path: "/career"
    },
    {
        name: "Learning Roadmap",
        icon: Map,
        path: "/roadmap"
    },
    {
        name: "Skill Gap Analysis",
        icon: Target,
        path: "/skill-gap"
    },
    {
        name: "Resume Review",
        icon: FileText,
        path: "/resume"
    },
    {
        name: "Interview Preparation",
        icon: BriefcaseBusiness,
        path: "/interview"
    }
];

const Sidebar = () => {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white shadow-lg">

            <div className="h-16 flex items-center justify-center border-b border-slate-700">

                <GraduationCap
                    size={28}
                    className="mr-2 text-blue-400"
                />

                <h1 className="font-bold text-xl">
                    EduBridge AI
                </h1>

            </div>

            <nav className="mt-6 flex flex-col gap-2 px-3">

                {menu.map((item) => {

                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                                ${
                                    isActive
                                        ? "bg-blue-600"
                                        : "hover:bg-slate-800"
                                }`
                            }
                        >
                            <Icon size={20} />
                            <span>{item.name}</span>
                        </NavLink>
                    );
                })}
            </nav>

        </aside>
    );
};

export default Sidebar;