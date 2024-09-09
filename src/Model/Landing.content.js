export const landingPageContent = (GetThemeStatus, landingImages) => {

  return {
    image: !GetThemeStatus ? landingImages[Object.keys(landingImages)[0]] : landingImages[Object.keys(landingImages)[1]],
    // image: !GetThemeStatus ? a[Object.keys(a)[0]] : a[Object.keys(a)[1]],
    heading: "we are ",
    companyName: "SWITCHBOARD",
    content: "SWITCHBOARD is an event organizing company that specializes in delivering seamless  event experiences for clients whether it's a corporate conference, a personal celebration, or a community gathering, you name it, our team of experts is dedicated to bringing your vision to life and making sure every detail is taken care of.",
    buttons: [
      {
        button_name: "Events"
      },
      {
        button_name: "Wedding"
      }
    ]
  }
}
