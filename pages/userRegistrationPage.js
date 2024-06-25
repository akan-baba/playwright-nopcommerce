export class UserRegistrationPage {
  constructor(page) {
      this.page = page;
  }

  // Web selectors for locating elements on the page.
  get webSelectors() {
      return {
          registrationLink: '.ico-register',
          genderMale: '#gender-male',
          genderFemale: '#gender-female',
          firstName: '#FirstName',
          lastName: '#LastName',
          dobDay: 'select[name="DateOfBirthDay"]',
          dobMonth: 'select[name="DateOfBirthMonth"]',
          dobYear: 'select[name="DateOfBirthYear"]',
          email: '#Email',
          userName:'#Username',
          streetAddress:'#StreetAddress',
          zipCode:'#ZipPostalCode',
          county:'#County',
          city:'#City',
          country:'#CountryId',
          state:'#StateProvinceId',
          phone:'#Phone',
          password: '#Password',
          confirmPassword:  '#ConfirmPassword',
          registerButton: '#register-button',
          privacyPolicy:'#accept-consent',
          registerButton:'#register-button'
               
         
      };
  }

  // Page actions to interact with the web elements on the page.
  get pageActions() {
      return {
         
          clickRegistrationLink: () => this.page.locator(this.webSelectors.registrationLink),
          clickGenderMale: () => this.page.locator(this.webSelectors.genderMale),
          clickGenderFemale: () => this.page.locator(this.webSelectors.genderFemale),
          enterFirstName: () => this.page.locator(this.webSelectors.firstName),
          enterLastName: () => this.page.locator(this.webSelectors.lastName),
          selectDobDay: () => this.page.locator(this.webSelectors.dobDay),
          selectDobMonth: () => this.page.locator(this.webSelectors.dobMonth),
          selectDobYear: () => this.page.locator(this.webSelectors.dobYear),
          enterEmail: () => this.page.locator(this.webSelectors.email),
          enterUserName: () => this.page.locator(this.webSelectors.userName),
          enterStreetAddress: () => this.page.locator(this.webSelectors.streetAddress),
          enterZipCode: () => this.page.locator(this.webSelectors.zipCode),
          enterCounty: () => this.page.locator(this.webSelectors.county),
          enterCity: () => this.page.locator(this.webSelectors.city),
          selectCountry: () => this.page.locator(this.webSelectors.country),
          selectState: () => this.page.locator(this.webSelectors.state),
          enterPhone: () => this.page.locator(this.webSelectors.phone),
          enterPassword: () => this.page.locator(this.webSelectors.password),
          enterConfirmPassword: () => this.page.locator(this.webSelectors.confirmPassword),
          clickPrivacyPolicy: () => this.page.locator(this.webSelectors.privacyPolicy),
          clickRegisterButton: () => this.page.locator(this.webSelectors.registerButton),
          
         
          
         

      };
  }
}


