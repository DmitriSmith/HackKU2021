# HackKU2021
My project for HackKU 2021.
Built using React-Native and TypeScript.
Tested on Android only.

# IMPORTANT!
This app pattern-matches the lot number and date received. **Different manufacturers have different lot number formats**.
I've included the format to make it easier to test. 

**Proper alerts haven't been implemented yet, so the app will refuse to generate a QR code without telling you it's an input issue.**
```
Pfizer: 6 characters, alphanumeric
AstraZeneca: 6 characters, alphanumeric
Moderna: 7 characters, alphanumeric
Johnson & Johnson: 7 characters, alphanumeric
```

## Inspiration
Recent news surrounding Covid  vaccine "passports" inspired the original purpose of this app, to incentivize receiving a covid vaccination by giving rewards in the form of coupons to local businesses. Using CVKey nearly daily for the last year was the inspiration for the QR elements of the app.
## What it does
Generates a QR Code with your vaccination status, readable by any QR scanner. Uses pattern matching to make counterfeiting more difficult.
## How we built it
The app is built entirely using TypeScript in React-Native, a ReactJS framework for deploying to mobile devices. It was planned to use Platter for a PostGres database backend, but time constraints combined with technical issues forced that out of the picture. Likewise, more advanced profile features were planned, as well as user-specific coupon codes, however implementing them in the time given wasn't feasible with my level of experience with ReactJS going into the project.
## Challenges we ran into
I am a solo developer using a tech stack that I have never used before. Every step has been a learning process and unfortunately many of the features I was most excited about ended up on the cutting floor due to time constraints.
## Accomplishments that we're proud of
The app I created provides a useful service - an easy way to show that you've received your vaccination, without having to worry about damaging or losing your source card. And it compiles and runs, which was not at all a given going into this event. The app uses pattern-matching to make it as difficult to counterfeit as possible given the near non-existent security measures on the physical card it is replacing. The original vision for the app could be realized in just a few days of work, or less with an experienced developer.
## What we learned
The big things are ReactJS, TypeScript, and the React-Native framework. I also learned how to use various common auxiliary tools including npm, npx, and yarn. I also learned how to set up a platter PostGres database, even though I wasn't able to use it in the end.
## What's next for PandemicPassport
The next steps for PandemicPassport are as follows:
1) Connect the app to a database and backend
2) Use knowledge learned from experimenting to create proper screen navigation
3) Add user-persistence functionality
4) Give business accounts the ability to create rewards, users ability to see rewards
5) Create a QR-scanning partner app
6) Make it pretty
7) Partner with local businesses to provide rewards

# Build guide
## Dependencies
```
@react-native-picker/picker
react-native-paper
react-native-qrcode-svg
```
Make sure you have Android Studio with a an Android Q emulator downloaded if you plan to perform software emulation.

Once your emulator is running, launch Metro from the project directory using the following command:

`npx react-native start`

Then you can build the project for android from the root project directory in a seperate terminal using 

`npx react-native run-android`



