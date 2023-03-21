export default [
  {
    step: 1,
    title: "Personal info",
    description: "Please provide your name, email, address, and phone number.",
    informations: [
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
    type: "radio",
    name: "plan",
    plans: [
      {
        id: "arcade",
        icon: "icon-arcade.svg",
        monthly: {
          price: 9,
          unit: "/mo",
        },
        yearly: {
          price: 90,
          unit: "/yr",
          special: "2 months free",
        }
      },
      {
        id: "advanced",
        icon: "icon-advanced.svg",
        monthly: {
          price: 12,
          unit: "/mo",
        },
        yearly: {
          price: 120,
          unit: "/yr",
          special: "2 months free",
        }
      },
      {
        id: "pro",
        icon: "icon-pro.svg",
        monthly: {
          price: 15,
          unit: "/mo",
        },
        yearly: {
          price: 150,
          unit: "/yr",
          special: "2 months free",
        }
      }
    ],
  },
  {
    step: 3,
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
    type: "checkbox",
    addOns: [
      {
        id: "online-service",
        title: "Online service",
        desc: "Access to multiplayer games",
        monthy: {
          price: 1,
          unit: "/mo"
        },
        yearly: {
          price: 10,
          unit: "/yr"
        }
      },
      {
        id: "larger-storage",
        title: "Larger storage",
        desc: "Extra 1TB of cloud storage",
        monthy: {
          price: 2,
          unit: "/mo"
        },
        yearly: {
          price: 20,
          unit: "/yr"
        }
      },
      {
        id: "customizable-profile",
        title: "Customizable profile",
        desc: "Custom theme on profile",
        monthy: {
          price: 2,
          unit: "/mo"
        },
        yearly: {
          price: 20,
          unit: "/yr"
        }
      }

    ],
  }
];
