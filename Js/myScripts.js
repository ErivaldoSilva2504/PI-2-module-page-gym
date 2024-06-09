function tablePrint() {
    var tableContent = document.getElementById('schedule-table-2').outerHTML;
    var printWindow = window.open('', '', 'height=500, width=800');
    printWindow.document.write('<html><head><title>Print Schedule Table</title>');
    printWindow.document.write('<style>table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid black; padding: 8px; text-align: left; }</style>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(tableContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
} 

