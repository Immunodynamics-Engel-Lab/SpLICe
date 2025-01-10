function custom_func_9f78e326627b8d888612f5995b727462(value, row) { try { 
  const splitText = value.split(" | ")
    .map(segment => `<span style='white-space: pre-line; line-height: 110%;'>${segment}</span>`)
    .join("<br>");
  return splitText;
 } catch (e) { datavzrd.custom_error(e, 'Sequence') }}
function custom_func_9f78e326627b8d888612f5995b727462(value, row) { try { 
  const splitText = value.split(" | ")
    .map(segment => `<span style='white-space: pre-line; line-height: 110%;'>${segment}</span>`)
    .join("<br>");
  return splitText;
 } catch (e) { datavzrd.custom_error(e, 'peptide-score') }}
function custom_func_97b16d4ce98b8929519f5a36aa00d96d(value, row) { try { 
    if (value != ""){
        // Split the Mod and Position_in_Protein strings into arrays
        const modIDs = row.Mod.split(" | ");
        const positions = row["Positions within proteins"].split(" | ");

        // Create a map for modifications at specific positions
        const modificationPositions = {};
        for (let i = 0; i < modIDs.length; i++) {
            const position = parseInt(positions[i], 10); // Position of the modification
            const modID = modIDs[i]; // Modification ID
            modificationPositions[position] = modID;
        }

        // Define a color map for different modification types
        const colorMap = {
            "A": "hsla(0, 100%, 70%, 1.0)",       // Red
            "M": "hsla(51, 100%, 70%, 1.0)",      // Yellow
            "DA": "hsla(102, 100%, 70%, 1.0)",    // Light Green
            "P": "hsla(153, 100%, 70%, 1.0)",     // Green
            "G": "hsla(204, 100%, 70%, 1.0)",     // Cyan
            "O": "hsla(255, 100%, 70%, 1.0)",     // Blue
        };

        // Split the sequence into lines of 30 amino acids
        const sequenceLines = value.match(/.{1,30}/g);
        let htmlLines = [];
        
        for (let lineIndex = 0; lineIndex < sequenceLines.length; lineIndex++) {
            const line = sequenceLines[lineIndex];
            const lineStart = lineIndex * 30 + 1; // Position for this line
            const formattedLineStart = String(lineStart).padStart(4, "0");

            // Create the modification row and amino acid row
            let modificationRow = "<div style='position: relative; height: 40px;'>";
            let aminoAcidRow = "<div style='position: relative; padding-left: 45px;'>"; // Account for the row number space

            // Add the row number at the start of each row
            aminoAcidRow += `<span style="position: absolute; left: 0; font-family: monospace; font-size: 14px;">${formattedLineStart}</span>`;

            // Iterate through the amino acids in the line
            for (let i = 0; i < line.length; i++) {
                const aa = line[i];
                const position = lineStart + i; // Position of the amino acid in the full sequence
                const modID = modificationPositions[position]; // Check if this position has a modification

                // Add modification circle above the amino acid if applicable
                if (modID) {
                    const color = (colorMap[modID] || "hsla(0, 0%, 0%, 0)") // Default to transparent if no match in colorMap
                        .replace(/hsla\((\d+),\s*(\d+)%,\s*(\d+)%,\s*[\d.]+\)/,
                            (_, h, s, l) => `hsla(${h}, ${s}%, ${l}%, 1)`);
                    modificationRow += `
                        <div style="position: absolute; top: 20px; left: ${i * 16 + 41.5}px; text-align: center;">
                            <div style="background-color: ${color}; color: black; 
                                        font-size: 10px; font-weight: bold; border-radius: 50%; 
                                        width: 16px; height: 16px; line-height: 16px; margin: auto;">
                                ${modID}
                            </div>
                        </div>
                    `;
                }

                // Add the amino acid letter
                aminoAcidRow += `
                    <span style="position: absolute; left: ${i * 16 + 45}px; font-family: monospace; font-size: 14px;">
                        ${aa}
                    </span>
                `;
            }

            modificationRow += "</div>";
            aminoAcidRow += "</div>";
            htmlLines.push(modificationRow);
            htmlLines.push(aminoAcidRow);
        }

        // Combine all lines into a final HTML string
        const htmlString = `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.2;
                    margin: 0px;
                }
                .sequence-container {
                    font-family: monospace;
                    white-space: nowrap;
                    width: 530px;
                    margin: 0;
                }
            </style>
        </head>
        <body>
            <div class="sequence-container">
                ${htmlLines.join("")}
            </div>
        </body>
        </html>
        `;
        return htmlString;
    } else {
        return "No modifications in library"
    }
   } catch (e) { datavzrd.custom_error(e, 'Protein Sequence') }}
function custom_func_9f78e326627b8d888612f5995b727462(value, row) { try { 
  const splitText = value.split(" | ")
    .map(segment => `<span style='white-space: pre-line; line-height: 110%;'>${segment}</span>`)
    .join("<br>");
  return splitText;
 } catch (e) { datavzrd.custom_error(e, 'm/z') }}
function custom_func_9f78e326627b8d888612f5995b727462(value, row) { try { 
  const splitText = value.split(" | ")
    .map(segment => `<span style='white-space: pre-line; line-height: 110%;'>${segment}</span>`)
    .join("<br>");
  return splitText;
 } catch (e) { datavzrd.custom_error(e, 'Charge') }}
function custom_func_7ad605c7c92e6448cef375b7c8fac75b(value, row) { try { 
  return `${parseInt(value)}`;
 } catch (e) { datavzrd.custom_error(e, 'Gene ID') }}
function custom_func_b772e6e132a783e0c0c43161fecac56a(row) { try {  return ''  } catch (e) { datavzrd.custom_error(e, 'ps-vs-mz') }}
function custom_func_1fcb9b0bffa9cfda30e28d20f6396e0b(_, row) { try { 
  const columns = ["Sequence", "m/z", "peptide-score", "Charge"];
  const splitColumns = columns.map(column => row[column] ? row[column].split(" | ") : []);
  const maxLength = Math.max(...splitColumns.map(arr => arr.length));
  const result = [];
  for (let i = 0; i < maxLength; i++) {
    const entry = {};
    columns.forEach((column, index) => {
      entry[column] = splitColumns[index][i] || null; // Use null if no value exists at this position
    });
    result.push(entry);
  }
  return result;
 } catch (e) { datavzrd.custom_error(e, 'ps-vs-mz') }}
