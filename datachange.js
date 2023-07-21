const fs = require('fs');

function convertDate(dateStr) {
    const [month, day, year] = dateStr.split("/");
    console.log(`${year}-${month}-${day}`);
    const dateObj = new Date(`${year}-${month}-${day}`);
    return dateObj.toISOString().split("T")[0];
}

fs.readFile('./korstocks.json', "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        // 데이터 내의 모든 "ListingDate" 값을 변경
        jsonData.Sheet2.forEach((item) => {
            if(item.ListingDate) {
                item.ListingDate = convertDate(item.ListingDate);
            }
        });

        // 수정된 데이터를 다시 JSON 파일로 저장
        const modifiedData = JSON.stringify(jsonData, null, 2);
        fs.writeFile('./korstocks2.json', modifiedData, "utf8", (err) => {
            if (err) {
                console.error("Error writing to the file:", err);
                return;
            }
            console.log("Data has been updated and saved.");
        });
    } catch (parseError) {
        console.error("Error parsing JSON data:", parseError);
    }
});