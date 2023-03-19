export default [
  {
    step: 1,
    title: "Personal info",
    description: "Please provide your name, email, address, and phone number.",
    inputs: [
      {
        id: "name",
        type: "text",
        label: "Name",
        placeholder: "e.g. Stephan King",
        value: ""
      },

      {
        id: "email",
        type: "email",
        label: "Email Address",
        placeholder: "e.g. stephanking@lorem.com",
        value: ""
      },

      {
        id: "phone",
        type: "text",
        label: "Phone Number",
        placeholder: "+1 234 567890",
        value: ""
      }
    ]
  },
  {
    step: 2,
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing",
    value: "",
    monthly: [
      {
        id: "arcade",
        type: "radio",
        name: "plan",
        value: 9,
        price: "$9/mo",
        icon: "icon-arcade.svg"
      },

      {
        id: "advanced",
        type: "radio",
        name: "plan",
        value: 12,
        price: "$12/mo",
        icon: "icon-advanced.svg"
      },

      {
        id: "pro",
        type: "radio",
        name: "plan",
        value: 15,
        price: "$15/mo",
        icon: "icon-pro.svg"
      }
    ],
    yearly: [
      {
        id: "arcade",
        type: "radio",
        name: "plan",
        value: 90,
        price: "$90/yr",
        special: "2 months free",
        icon: "icon-arcade.svg"
      },
      {
        id: "advanced",
        type: "radio",
        name: "plan",
        value: 120,
        price: "$120/yr",
        special: "2 months free",
        icon: "icon-advanced.svg"
      },
      {
        id: "pro",
        type: "radio",
        name: "plan",
        value: 150,
        price: "$150/yr",
        special: "2 months free",
        icon: "icon-pro.svg"
      }
    ]
  },
  {
    step: 3,
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
    monthly: [
      {
        id: "online-service",
        type: "checkbox",
        name: "online-service",
        title: "Online service",
        desc: "Access to multiplayer games",
        price: "$1/mo"
      },
      {
        id: "larger-storage",
        type: "checkbox",
        title: "Large storage",
        desc: "Extra 1TB of cloud storage",
        price: "$2/mo"
      },
      {
        id: "customizable-profile",
        type: "checkbox",
        title: "Customizable profile",
        desc: "Custom theme on profile",
        price: "$2/mo"
      }
    ],
    yearly: [
      {
        id: "online-service",
        type: "checkbox",
        name: "online-service",
        title: "Online service",
        desc: "Access to multiplayer games",
        price: "$10/yr"
      },
      {
        id: "larger-storage",
        type: "checkbox",
        title: "Large storage",
        desc: "Extra 1TB of cloud storage",
        price: "$20/yr"
      },
      {
        id: "customizable-profile",
        type: "checkbox",
        title: "Customizable profile",
        desc: "Custom theme on profile",
        price: "$20/yr"
      }
    ]
  }
]
