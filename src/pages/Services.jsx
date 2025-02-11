import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TechnologyStackTable = () => {
  const rows = [
    {
      aspect: "Infrastructure",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      onPremises: "Requires physical servers and local IT management for ASP.NET and SQL DB setup.",
      onCloud: "Scalable, AWS-hosted infrastructure running ASP.NET and SQL Database."
    },
    {
      aspect: "Cost",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      onPremises: "High upfront costs for servers and SQL licenses, with ongoing maintenance expenses.",
      onCloud: "Pay-as-you-go model for SQL DB and ASP.NET hosting, with lower upfront costs."
    },
    {
      aspect: "Scalability & Flexibility",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      onPremises: "Limited by local hardware; scaling requires manual upgrades and SQL server management.",
      onCloud: "Instantly scalable with AWS services, automated scaling for ASP.NET apps and SQL databases."
    },
    {
      aspect: "Security & Compliance",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z M12 9V5m0 0v4m0-4h4m-4 0H8" />
        </svg>
      ),
      onPremises: "Client manages security, compliance, and SQL database locally.",
      onCloud: "AWS offers built-in security features, encryption, and compliance certifications for ASP.NET and SQL DB."
    },
    {
      aspect: "Maintenance",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      ),
      onPremises: "Requires in-house maintenance for ASP.NET apps, SQL DB upgrades, and patching.",
      onCloud: "AWS manages infrastructure maintenance and updates for ASP.NET apps and SQL databases."
    },
    {
      aspect: "Access & Mobility",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      onPremises: "Limited to local access or VPNs for ASP.NET apps and SQL databases.",
      onCloud: "Globally accessible with secure remote access to ASP.NET apps and SQL DB from anywhere."
    }
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#1a2234] to-[#1d2639] p-1">
      <div className="relative overflow-x-auto rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th colSpan="3" className="relative p-6 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10"></div>
                <div className="relative">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Technology Stack Overview
                  </h2>
                  <p className="mt-2 text-sm text-gray-400">
                    On-Premises vs Cloud (ASP.NET & SQL DB)
                  </p>
                </div>
              </th>
            </tr>
            <tr className="border-b border-gray-700/50">
              <th className="p-4 text-left text-sm font-medium text-white bg-[#1d2639]/80 w-1/4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <span>Feature/Aspect</span>
                </div>
              </th>
              <th className="p-4 text-left text-sm font-medium text-white bg-[#1d2639]/80 w-[37.5%]">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m-9 0H0m2 0h5m-9 0H2m2 0h5m-9 0H0" />
                    </svg>
                  </div>
                  <span>On-Premises</span>
                </div>
              </th>
              <th className="p-4 text-left text-sm font-medium text-white bg-[#1d2639]/80 w-[37.5%]">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 110 5.292M15 21H3v-1a6 6 0 10 9 9v1zm0 0h6v-1a6 6 0 0110 0v1z" />
                    </svg>
                  </div>
                  <span>On-Cloud (AWS)</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr 
                key={row.aspect}
                className={`group border-b border-gray-700/50 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-colors`}
              >
                <td className="p-4 text-sm font-medium text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all">
                      <div className="text-blue-400 group-hover:scale-110 transition-transform">
                        {row.icon}
                      </div>
                    </div>
                    <span className="group-hover:text-blue-400 transition-colors">{row.aspect}</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {row.onPremises}
                </td>
                <td className="p-4 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {row.onCloud}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const modules = [
  {
    id: 'recruitment',
    title: 'Recruitment Process',
    bgColor: 'bg-[#1a237e]', // Deep blue
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0z M12 9V5m0 0v4m0-4h4m-4 0H8" />
      </svg>
    ),
    description: 'Streamline your hiring process with our comprehensive recruitment management system.',
    steps: [
      {
        title: "Position Creation",
        description: "Create and manage job positions efficiently"
      },
      {
        title: "Requisition Process",
        description: "Streamlined requisition workflow"
      },
      {
        title: "Multi-level Approval",
        description: "Structured approval hierarchy"
      },
      {
        title: "Interview Feedback",
        description: "Real-time feedback collection"
      },
      {
        title: "Offer Generation",
        description: "Automated offer letter creation"
      },
      {
        title: "Onboarding",
        description: "Seamless transition process"
      }
    ],
    benefits: [
      {
        title: "Streamlined Requisition Process",
        description: "Efficient and automated workflow"
      },
      {
        title: "Real-time Status Tracking",
        description: "Monitor progress instantly"
      },
      {
        title: "Faster Decision-making",
        description: "Accelerated hiring process"
      },
      {
        title: "Automated Offer Letters",
        description: "Quick offer generation"
      },
      {
        title: "Seamless Onboarding",
        description: "Smooth transition for new hires"
      }
    ],
    overview: "The Recruitment Process module of NexaHCM streamlines and automates the hiring process, from requisition approval to candidate selection and onboarding. It ensures that all budgeted positions are tracked in real time and allows for easy requisition creation, multi-level approvals, and efficient talent acquisition."
  },
  {
    id: 'onboarding',
    title: 'Onboarding Process',
    bgColor: 'bg-[#004d40]', // Dark teal
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z M12 9V5m0 0v4m0-4h4m-4 0H8" />
      </svg>
    ),
    description: 'Seamlessly integrate new employees with automated onboarding workflows.',
    steps: [
      {
        title: "Customizable Workflows",
        description: "Design flexible onboarding processes"
      },
      {
        title: "Indian Statutory Forms",
        description: "Compliant with local regulations"
      },
      {
        title: "Instant Digital ID Card",
        description: "Quick employee identification"
      },
      {
        title: "Digital Documentation",
        description: "Paperless document management"
      },
      {
        title: "Employee Masters Integration",
        description: "Seamless data synchronization"
      },
      {
        title: "Auto Mail Notifications",
        description: "Automated communication system"
      }
    ],
    benefits: [
      {
        title: "Compliance with Indian Regulations",
        description: "Stay compliant with local laws"
      },
      {
        title: "Real-time Status Tracking",
        description: "Monitor onboarding progress"
      },
      {
        title: "Instant ID Issuance",
        description: "Quick employee identification"
      },
      {
        title: "Improved First Impressions",
        description: "Enhanced employee experience"
      },
      {
        title: "Centralized Information",
        description: "Single source of truth"
      },
      {
        title: "Multi-level Workflows",
        description: "Structured approval processes"
      }
    ],
    overview: "The Onboarding Process module of NexaHCM simplifies and streamlines the process of integrating new hires into your organization. It ensures that employees have a smooth and well-coordinated start, reducing administrative workloads and enhancing the employee experience right from day one. With automated workflows and task management, this module helps HR teams effectively manage all onboarding activities, ensuring compliance and consistency."
  },
  {
    id: 'leave',
    title: 'Leave & Attendance',
    bgColor: 'bg-[#00695c]', // Darker teal
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    description: 'Track and manage employee attendance and leave requests efficiently.',
    steps: [
      {
        title: "Attendance Tracking",
        description: "Biometric integration for accurate tracking"
      },
      {
        title: "Leave Management",
        description: "Request and approval workflows"
      },
      {
        title: "Leave Policies",
        description: "Customizable policy configuration"
      },
      {
        title: "Balance Overview",
        description: "Real-time leave balance tracking"
      },
      {
        title: "Schedule Management",
        description: "Shift and work schedule planning"
      },
      {
        title: "Notifications",
        description: "Automated absence alerts"
      },
      {
        title: "Analytics",
        description: "Comprehensive reports and insights"
      }
    ],
    benefits: [
      {
        title: "Improved Efficiency",
        description: "Streamlined attendance management"
      },
      {
        title: "Enhanced Transparency",
        description: "Clear visibility of attendance data"
      },
      {
        title: "Better Compliance",
        description: "Adherence to policies and regulations"
      },
      {
        title: "Workforce Planning",
        description: "Effective resource management"
      },
      {
        title: "Accurate Record Keeping",
        description: "Reliable attendance tracking"
      },
      {
        title: "Reduced Admin Work",
        description: "Automated administrative tasks"
      },
      {
        title: "Multiple MIS Reports",
        description: "Comprehensive reporting system"
      }
    ],
    overview: "The Leave and Attendance Management module of NexaHCM streamlines the entire process of managing employee attendance and leave requests. It provides an efficient and transparent solution for tracking working hours, leave balances, and approvals, ensuring your organization stays compliant with company policies and labour regulations and it can be integrated with biometric machines."
  },
  {
    id: 'ess',
    title: 'ESS / Life Cycle',
    bgColor: 'bg-[#4a148c]', // Deep purple
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    description: 'Manage complete employee lifecycle from hiring to retirement.',
    steps: [
      {
        title: "Leave Management",
        description: "Application and approval workflows"
      },
      {
        title: "Attendance Regularization",
        description: "Simplified attendance correction process"
      },
      {
        title: "Travel Management",
        description: "End-to-end travel request handling"
      },
      {
        title: "Probation Confirmation",
        description: "Streamlined confirmation process"
      },
      {
        title: "Transfers",
        description: "Internal movement management"
      },
      {
        title: "Data Change Requests",
        description: "Self-service information updates"
      },
      {
        title: "Document Management",
        description: "Digital document repository"
      }
    ],
    benefits: [
      {
        title: "Automated Workflows",
        description: "Streamlined approvals and processes"
      },
      {
        title: "Real-time Status Tracking",
        description: "Instant visibility of request status"
      },
      {
        title: "Document Management",
        description: "Comprehensive digital storage"
      },
      {
        title: "Enhanced Experience",
        description: "Improved employee satisfaction"
      },
      {
        title: "Seamless Data Updates",
        description: "Easy information management"
      }
    ],
    overview: "The Employee Life Cycle process during employment in NexaHCM is designed to automate and streamline essential tasks such as leave applications, approvals, attendance regularization, travel management, probationary confirmation, transfers, data changes, and document management through a self-service portal (ESS). Employees can apply for leave, request attendance regularization, and submit travel expenses with ease, while the system triggers automatic workflows for manager approvals. Probationary confirmations and transfers are processed seamlessly through multi-level workflows, ensuring all relevant stakeholders are involved. The ESS portal allows employees to update personal information, access company documents, and track requests in real time. All documents, including leave records, travel expenses, and performance evaluations, are stored digitally for easy access and compliance."
  },
  {
    id: 'payroll',
    title: 'Payroll',
    bgColor: 'bg-[#283593]', // Indigo
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'Automated payroll processing with tax compliance and reporting.',
    steps: [
      {
        title: "Employee Self-service Portal",
        description: "Easy access to payroll information"
      },
      {
        title: "Income Tax Management",
        description: "Proposals and actuals submission"
      },
      {
        title: "Automated Calculations",
        description: "Precise payroll processing"
      },
      {
        title: "Form 16 Generation",
        description: "Automated tax form creation"
      },
      {
        title: "Bank Format Generation",
        description: "Streamlined salary disbursement"
      },
      {
        title: "Statutory Compliance",
        description: "Tax and regulatory adherence"
      }
    ],
    benefits: [
      {
        title: "Automated Compliance",
        description: "Ensures regulatory adherence"
      },
      {
        title: "Transparency",
        description: "Clear visibility of payroll data"
      },
      {
        title: "SOP Implementation",
        description: "Standardized processes"
      },
      {
        title: "Multiple MIS Reports",
        description: "Comprehensive reporting system"
      }
    ],
    overview: "The Payroll module in NexaHCM seamlessly integrates leave and attendance management, allowing real-time tracking of employee leaves and their impact on salary. It automates the calculation of earnings and deductions, ensuring accurate payroll processing based on leave balances, statutory deductions, and allowances. Employees can easily access their Payslips, which are generated automatically after each payroll cycle. The system also creates bank-upload formats for salary disbursement and ensures compliance with all statutory requirements by generating reports like PF, ESI, LWF, and income tax reports, ensuring full regulatory compliance for both employees and employers."
  },
  {
    id: 'travel',
    title: 'Travel & Expenses',
    bgColor: 'bg-[#1b5e20]', // Dark green
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'Simplify travel requests and expense management processes.',
    steps: [
      {
        title: "Expense Submission",
        description: "Seamless claim processing"
      },
      {
        title: "Category Management",
        description: "Expense categories and limits"
      },
      {
        title: "Real-time Tracking",
        description: "Instant notifications and status"
      },
      {
        title: "Reports & Analytics",
        description: "Comprehensive expense analysis"
      },
      {
        title: "Approval Workflows",
        description: "Customizable approval process"
      }
    ],
    benefits: [
      {
        title: "Increased Productivity",
        description: "Streamlined expense management"
      },
      {
        title: "Improved Compliance",
        description: "Policy adherence and control"
      },
      {
        title: "Enhanced Visibility",
        description: "Clear expense tracking"
      },
      {
        title: "Faster Reimbursements",
        description: "Quick processing cycles"
      },
      {
        title: "Multiple MIS Reports",
        description: "Comprehensive reporting system"
      }
    ],
    overview: "This module offers an easy way for employees to manage their travel and related expenses. Employees can request a travel advance before their trip and submit their final expense claims once the trip is complete. The system tracks all expenses to ensure compliance with company policies, while managers can review, approve, or ask for more information when necessary. Employees can also track the status of their claims in real-time, providing transparency and speeding up reimbursements. This module simplifies approvals, enhances cost control, and streamlines the entire travel and expense process for both employees and the company."
  },
  {
    id: 'performance',
    title: 'Performance Management',
    bgColor: 'bg-[#3e2723]', // Dark brown
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    description: 'Track and improve employee performance with detailed analytics.',
    steps: [
      {
        title: "KRAs Settings",
        description: "Define and manage key result areas"
      },
      {
        title: "Review Cycles",
        description: "Quarterly/Half yearly evaluations"
      },
      {
        title: "Real-time Feedback",
        description: "Ongoing discussion and feedback capture"
      },
      {
        title: "Approval Process",
        description: "Manager and Manager's Manager review"
      },
      {
        title: "Rating System",
        description: "Performance rating finalization"
      },
      {
        title: "Increment Letters",
        description: "Automated letter generation"
      }
    ],
    benefits: [
      {
        title: "Configurable Workflows",
        description: "Customizable evaluation processes"
      },
      {
        title: "Transparent Reviews",
        description: "Fair and clear evaluation system"
      },
      {
        title: "Flexible Review Cycles",
        description: "Adaptable evaluation periods"
      },
      {
        title: "Automated Increments",
        description: "Streamlined salary adjustment process"
      },
      {
        title: "Improved Engagement",
        description: "Enhanced feedback and communication"
      }
    ],
    overview: "This module offers a comprehensive approach to performance management, enabling organizations to streamline their evaluation processes. It begins with the setting of Key Result Areas (KRAs) by employees, followed by manager approval to ensure alignment with organizational goals. The system supports half-yearly reviews, allowing for real-time feedback and discussions between employees and managers to promote ongoing development. At the end of the year, an annual review is conducted, during which employees are rated based on their performance. These ratings automatically trigger the increment process, ensuring salary adjustments are handled in line with company policies. Finally, personalized increment letters are generated and provided to individual employees, completing the performance evaluation cycle seamlessly."
  },
  {
    id: 'benefits',
    title: 'Employee Benefits',
    bgColor: 'bg-[#006064]', // Dark cyan
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z M12 9V5m0 0v4m0-4h4m-4 0H8" />
      </svg>
    ),
    description: 'Comprehensive benefits management and enrollment system.',
    steps: [
      {
        title: "Benefits Requisition",
        description: "Easy request submission process"
      },
      {
        title: "Loan Requests",
        description: "Streamlined loan application"
      },
      {
        title: "Approval Process",
        description: "Workflow-based approvals"
      },
      {
        title: "Payroll Integration",
        description: "Seamless benefit disbursement"
      },
      {
        title: "Self-service Portal",
        description: "Direct employee access"
      },
      {
        title: "Employee Engagement",
        description: "Enhanced benefit interaction"
      }
    ],
    benefits: [
      {
        title: "Easy Access",
        description: "Simple benefits management"
      },
      {
        title: "Automated Workflows",
        description: "Streamlined processing"
      },
      {
        title: "Payroll Integration",
        description: "Seamless disbursement"
      },
      {
        title: "Transparency",
        description: "Clear tracking and visibility"
      },
      {
        title: "Policy Compliance",
        description: "Adherence to guidelines"
      }
    ],
    overview: "This module features the capability for employees to raise their requisitions directly through the ESS login for benefits such as marriage gifts, birthday gifts, anniversary gifts, and salary advances or loans etc. Each request follows a structured workflow, ensuring that approvals are processed according to company policies. Once all necessary approvals are secured, the requests are seamlessly integrated with payroll, allowing for the disbursement of these benefits along with regular salary processing. This ensures a smooth and efficient handling of employee benefits, while maintaining transparency and compliance with organizational guidelines."
  },
  {
    id: 'askhr',
    title: 'Ask HR',
    bgColor: 'bg-[#0d47a1]', // Strong blue
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z M12 9V5m0 0v4m0-4h4m-4 0H8" />
      </svg>
    ),
    description: 'Direct communication channel with HR for quick query resolution.',
    steps: [
      {
        title: "Concern Submission",
        description: "Employee-driven inquiry system"
      },
      {
        title: "Ticket Routing",
        description: "Automated assignment process"
      },
      {
        title: "Status Tracking",
        description: "Real-time updates and monitoring"
      },
      {
        title: "Resolution Process",
        description: "Efficient query handling"
      },
      {
        title: "Closure & Feedback",
        description: "Complete resolution confirmation"
      }
    ],
    benefits: [
      {
        title: "Improved Communication",
        description: "Enhanced HR interaction"
      },
      {
        title: "Streamlined Resolution",
        description: "Efficient query handling"
      },
      {
        title: "Employee Satisfaction",
        description: "Better service delivery"
      },
      {
        title: "Transparency",
        description: "Clear accountability"
      },
      {
        title: "Centralized Management",
        description: "Unified issue tracking"
      }
    ],
    overview: "The Ask HR feature in NexaHCM offers employees a seamless platform to raise concerns or inquiries directly through the portal. This automated system allows employees to submit inquiries related to payroll, benefits, tax, or any other HR-related matters. Each inquiry is swiftly routed to the relevant HR or support team for prompt action. Employees can track the status of their concerns in real-time, receiving timely updates throughout the resolution process. A concern is only marked as resolved and the ticket closed after the employee confirms full satisfaction with the resolution, ensuring efficient and transparent communication."
  },
  {
    id: 'exit',
    title: 'Exit Management',
    bgColor: 'bg-[#311b92]', // Deep purple
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    ),
    description: 'Structured offboarding process for departing employees.',
    steps: [
      {
        title: "Resignation Process",
        description: "Submission and approvals workflow"
      },
      {
        title: "NOC Requests",
        description: "Departmental clearance management"
      },
      {
        title: "F&F Settlement",
        description: "Final settlement calculation"
      },
      {
        title: "Status Tracking",
        description: "Real-time process monitoring"
      },
      {
        title: "Exit Interview",
        description: "Feedback collection forms"
      },
      {
        title: "Document Generation",
        description: "Automated letter creation"
      },
      {
        title: "Approval Workflows",
        description: "Multi-level approval system"
      },
      {
        title: "System Integration",
        description: "Payroll and HR connectivity"
      }
    ],
    benefits: [
      {
        title: "Streamlined Process",
        description: "Efficient exit management"
      },
      {
        title: "Transparency",
        description: "Clear process compliance"
      },
      {
        title: "Automated Documentation",
        description: "Quick document generation"
      },
      {
        title: "Fast Settlements",
        description: "Expedited processing"
      },
      {
        title: "Feedback Collection",
        description: "Valuable exit insights"
      }
    ],
    overview: "This module in NexaHCM ensures a smooth, transparent process for managing employee exits, from resignation submission to final clearance. Employees can submit their resignation request, which is first routed to their manager for approval. After managerial approval, the process continues through multiple levels of approval. On the employee's last working day, they can initiate the NOC (No Objection Certificate) process, which is routed for approval across departments such as Finance, IT, and Admin. Once the NOC is completed, the concerned team prepares the Full and Final (F&F) settlement statement, which is then sent for further approvals. Finally, the Finance department processes the F&F, and the relieving and experience letters are automatically generated and sent to the employee, ensuring a respectful and organized exit."
  },
  {
    id: 'compliance',
    title: 'HR Compliance Calendar',
    bgColor: 'bg-[#1a472a]', // Forest green
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    description: 'Stay updated with compliance deadlines and requirements.',
    steps: [
      {
        title: "Compliance Tracking",
        description: "Comprehensive monitoring system"
      },
      {
        title: "Automated Reminders",
        description: "Timely compliance alerts"
      },
      {
        title: "Record Management",
        description: "License and payment tracking"
      },
      {
        title: "Compliance Dashboard",
        description: "Visual compliance monitoring"
      },
      {
        title: "Audit Trail",
        description: "Detailed compliance history"
      }
    ],
    benefits: [
      {
        title: "Reduced Risk",
        description: "Enhanced compliance management"
      },
      {
        title: "Increased Efficiency",
        description: "Time-saving automation"
      },
      {
        title: "Improved Accountability",
        description: "Clear responsibility tracking"
      },
      {
        title: "Document Repository",
        description: "Centralized record keeping"
      },
      {
        title: "Better Decisions",
        description: "Data-driven compliance"
      },
      {
        title: "Simplified Audits",
        description: "Streamlined audit process"
      }
    ],
    overview: "The HR compliance calendar in NexaHCM is designed to manage and track all statutory compliances related to various labour and employment laws, including but not limited to the Factory Act, Shops and Establishment Act, Contract Labour (Regulation and Abolition) Act, Provident Fund (PF), Employee State Insurance (ESI), Professional Tax (PT), Labour Welfare Fund (LWF), and other state-specific and industry-specific regulations. It ensures that applicable compliances and its due dates for licenses, statutory filings, and payments are never missed, and compliance is maintained in accordance with regulatory standards."
  },
  {
    id: 'visitor',
    title: 'Visitor Management',
    bgColor: 'bg-[#263238]', // Blue grey
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description: 'Digital visitor tracking and management system.',
    steps: [
      {
        title: "Visitor Check-in",
        description: "Quick registration and notification"
      },
      {
        title: "Pre-scheduled Visits",
        description: "Advance visitor registration"
      },
      {
        title: "Real-time Tracking",
        description: "Live visitor monitoring"
      },
      {
        title: "Check-out Process",
        description: "Automated exit management"
      },
      {
        title: "Log Management",
        description: "Comprehensive visit records"
      },
      {
        title: "Badge Printing",
        description: "Visitor identification system"
      },
      {
        title: "Custom Workflow",
        description: "Flexible process management"
      }
    ],
    benefits: [
      {
        title: "Fast Processing",
        description: "Quick check-in/out"
      },
      {
        title: "Enhanced Security",
        description: "Improved visitor control"
      },
      {
        title: "Pre-scheduling",
        description: "Streamlined visit planning"
      },
      {
        title: "Real-time Tracking",
        description: "Live monitoring system"
      },
      {
        title: "Visit Records",
        description: "Complete visitor history"
      }
    ],
    overview: "The Visitor Management process in NexaHCM ensures a seamless and efficient check-in and check-out experience for visitors. When a visitor arrives at the office premises, the security personnel or concerned person enters their details, including the name of the contact person they are visiting. Once this information is captured, the system automatically notifies the concerned employee, informing them of the visitor's arrival. This allows the employee to promptly acknowledge and prepare for the meeting. Additionally, employees can pre-schedule visits by requesting access for visitors beforehand. When the visitor arrives, their details are already verified in the system, allowing for quick identification and faster entry. The check-out process is similarly automated, ensuring accurate records of the visitor's time in and out of the premises."
  },
  {
    id: 'technology',
    title: 'Technology Stack',
    bgColor: 'bg-[#4a0072]', // Deep violet
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
    description: 'Modern tech infrastructure for seamless HR operations.',
    customComponent: TechnologyStackTable,
    overview: "NexaHCM offers flexible deployment options with both On-Premises and Cloud (AWS) hosting for its ASP.NET and SQL Database infrastructure. The On-Premises solution requires physical servers and local IT management, with higher upfront costs but complete control over the environment. In contrast, the Cloud deployment on AWS provides scalable, pay-as-you-go infrastructure with automated management and global accessibility. AWS hosting includes built-in security features, automated scaling, and managed maintenance, reducing the operational overhead while providing enterprise-grade reliability and performance. This comparison helps organizations choose the deployment model that best suits their specific needs, compliance requirements, and budget constraints."
  }
];

const moduleColors = {
  'Recruitment Process': {
    bg: 'from-blue-600 to-blue-800',
    card: 'bg-blue-600/10',
    border: 'border-blue-200/30',
    text: 'text-blue-100'
  },
  'Onboarding Process': {
    bg: 'from-emerald-600 to-emerald-800',
    card: 'bg-emerald-600/10',
    border: 'border-emerald-200/30',
    text: 'text-emerald-100'
  },
  'Leave & Attendance': {
    bg: 'from-teal-600 to-teal-800',
    card: 'bg-teal-600/10',
    border: 'border-teal-200/30',
    text: 'text-teal-100'
  },
  'ESS / Life Cycle': {
    bg: 'from-purple-600 to-purple-800',
    card: 'bg-purple-600/10',
    border: 'border-purple-200/30',
    text: 'text-purple-100'
  },
  'Payroll': {
    bg: 'from-indigo-600 to-indigo-800',
    card: 'bg-indigo-600/10',
    border: 'border-indigo-200/30',
    text: 'text-indigo-100'
  },
  'Travel & Expenses': {
    bg: 'from-green-600 to-green-800',
    card: 'bg-green-600/10',
    border: 'border-green-200/30',
    text: 'text-green-100'
  },
  'Performance Management': {
    bg: 'from-amber-600 to-amber-800',
    card: 'bg-amber-600/10',
    border: 'border-amber-200/30',
    text: 'text-amber-100'
  },
  'Employee Benefits': {
    bg: 'from-cyan-600 to-cyan-800',
    card: 'bg-cyan-600/10',
    border: 'border-cyan-200/30',
    text: 'text-cyan-100'
  },
  'Ask HR': {
    bg: 'from-blue-500 to-blue-700',
    card: 'bg-blue-500/10',
    border: 'border-blue-200/30',
    text: 'text-blue-100'
  },
  'Exit Management': {
    bg: 'from-violet-600 to-violet-800',
    card: 'bg-violet-600/10',
    border: 'border-violet-200/30',
    text: 'text-violet-100'
  },
  'HR Compliance Calendar': {
    bg: 'from-rose-600 to-rose-800',
    card: 'bg-rose-600/10',
    border: 'border-rose-200/30',
    text: 'text-rose-100'
  },
  'Visitor Management': {
    bg: 'from-gray-600 to-gray-800',
    card: 'bg-gray-600/10',
    border: 'border-gray-200/30',
    text: 'text-gray-100'
  },
  'Technology Stack': {
    bg: 'from-purple-600 to-purple-800',
    card: 'bg-purple-600/10',
    border: 'border-purple-200/30',
    text: 'text-purple-100'
  }
};

const ServiceCard = ({ service, index, onClick }) => {
  const colors = moduleColors[service.title];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onClick={() => onClick(service)}
      className={`group relative p-6 rounded-2xl ${colors.card} backdrop-blur-xl
                 ${colors.border} shadow-lg hover:shadow-xl cursor-pointer
                 transition-all duration-300 hover:scale-[1.02] overflow-hidden`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
        <div className={`w-full h-full bg-gradient-to-br ${colors.bg}`}></div>
      </div>

      {/* Icon */}
      <div className="relative w-12 h-12 mb-4">
        <div className={`w-full h-full rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center`}>
          <div className={`${colors.text} text-xl`}>
            {service.icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <h3 className={`relative text-lg font-semibold mb-2 ${colors.text} group-hover:text-white
                   transition-colors duration-300`}>
        {service.title}
      </h3>
      <p className={`relative text-sm ${colors.text} opacity-90 group-hover:opacity-100
                 transition-all duration-300 line-clamp-2`}>
        {service.description}
      </p>

      {/* Hover indicator */}
      <div className="absolute bottom-3 right-4 opacity-0 transform translate-x-2 
        group-hover:opacity-100 group-hover:translate-x-0 
        transition-all duration-300">
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={colors.text}
        >
          →
        </motion.div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#7091E6] via-[#8697C4] to-[#ADBBDA]"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#3D52A0]/40 to-[#7091E6]/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#7091E6]/40 to-[#8697C4]/40 rounded-full blur-3xl"></div>
        
        {/* Additional color accents */}
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-[#3D52A0]/30 to-[#7091E6]/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#7091E6]/30 to-[#EDE8F5]/30 rounded-full blur-2xl"></div>
        
        {/* Floating elements with animation */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/3 top-1/3 w-48 h-48 bg-gradient-to-br from-[#3D52A0]/20 to-[#7091E6]/20 rounded-full blur-xl"
        ></motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-1/3 bottom-1/3 w-64 h-64 bg-gradient-to-br from-[#7091E6]/20 to-[#8697C4]/20 rounded-full blur-xl"
        ></motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-6 text-white"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-white/90 text-center mb-16 max-w-3xl mx-auto"
        >
          Comprehensive HR management solutions designed to transform and streamline your business operations
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              onClick={setSelectedModule}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedModule && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedModule(null)}
        >
          <div 
            className="relative min-h-screen flex items-center justify-center p-4"
          >
            <div 
              className={`relative w-full max-w-4xl rounded-2xl shadow-2xl ${moduleColors[selectedModule.title].card} 
                       ${moduleColors[selectedModule.title].border} border backdrop-blur-xl`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`flex items-center justify-between p-6 border-b ${moduleColors[selectedModule.title].border}`}>
                <div className="flex items-center gap-4">
                  <div className={`mt-1 w-12 h-12 rounded-xl bg-gradient-to-br ${moduleColors[selectedModule.title].bg} 
                               flex items-center justify-center`}>
                    <div className={`${moduleColors[selectedModule.title].text} text-2xl`}>
                      {selectedModule.icon}
                    </div>
                  </div>
                  <h2 className={`text-2xl font-bold ${moduleColors[selectedModule.title].text}`}>
                    {selectedModule.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedModule(null)}
                  className={`${moduleColors[selectedModule.title].text} hover:opacity-80 rounded-lg p-2 
                           transition-opacity duration-200`}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Overview */}
                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${moduleColors[selectedModule.title].text}`}>
                    Overview
                  </h3>
                  <div className={`rounded-xl p-6 ${moduleColors[selectedModule.title].card} 
                               backdrop-blur-xl ${moduleColors[selectedModule.title].text} leading-relaxed`}>
                    {selectedModule.overview}
                  </div>
                </div>

                {/* Process Steps */}
                {selectedModule.steps && (
                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${moduleColors[selectedModule.title].text}`}>
                      Process Steps
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedModule.steps.map((step, index) => (
                        <div
                          key={index}
                          className={`${moduleColors[selectedModule.title].card} rounded-xl p-4 
                                   ${moduleColors[selectedModule.title].text} hover:opacity-90 transition-opacity`}
                        >
                          <div className={`w-8 h-8 mb-3 rounded-full bg-gradient-to-br 
                                      ${moduleColors[selectedModule.title].bg} 
                                      flex items-center justify-center mx-auto`}>
                            {index + 1}
                          </div>
                          <p className="text-center">{step.title}</p>
                          <p className="text-center text-sm mt-2 opacity-80">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Benefits */}
                {selectedModule.benefits && (
                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${moduleColors[selectedModule.title].text}`}>
                      Key Benefits
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedModule.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className={`${moduleColors[selectedModule.title].card} rounded-xl p-4 
                                   ${moduleColors[selectedModule.title].text} hover:opacity-90 transition-opacity`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-br 
                                        ${moduleColors[selectedModule.title].bg} 
                                        flex items-center justify-center flex-shrink-0`}>
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium mb-1">{benefit.title}</h4>
                              <p className="text-sm opacity-80">{benefit.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Services;
