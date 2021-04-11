//Generate a CSV from user info
export default function GenerateQRCode(manufacturer:string, lot:string, date:string,dose:string) {
    //Timestamp in seconds
    let timestamp = Date.now() / 1000;
    let columns:string = 'Manufacturer,Lot Number,Date Administered,Dose\n'
    let data:string =  manufacturer + ',' + lot + ',' + date + ',' + dose + ',' + timestamp;
    let qrCode:string = columns + data;
    return (qrCode);
}