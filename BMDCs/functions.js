function custom_func_7ad605c7c92e6448cef375b7c8fac75b(value, row) { try { 
  return `${parseInt(value)}`;
 } catch (e) { datavzrd.custom_error(e, 'Gene ID') }}
function custom_func_5b748091d11e893e205df00033874dc4(value) { try { 
  value = value.replaceAll("\"", "&quot;")
  value = value.replaceAll("'","\"");
  const arrayOfDicts = JSON.parse(value);
  return arrayOfDicts;
 } catch (e) { datavzrd.custom_error(e, 'ps-vs-mz') }}
function custom_func_931eb662cadf04854be42715fa4be045(row) { try { 
  let value = row["ps-vs-mz"].replaceAll("\"", "&quot;");
  value = value.replaceAll("'", "\"");
  const arrayOfDicts = JSON.parse(value);
  let text = arrayOfDicts.map(entry => entry["m/z"]).join("\n");
  const splitText = "<span style='white-space: pre-line; line-height: 120%;'>" + text + "</span>";
  return splitText;
 } catch (e) { datavzrd.custom_error(e, 'peptide-score') }}
function custom_func_931eb662cadf04854be42715fa4be045(row) { try { 
  let value = row["ps-vs-mz"].replaceAll("\"", "&quot;");
  value = value.replaceAll("'", "\"");
  const arrayOfDicts = JSON.parse(value);
  let text = arrayOfDicts.map(entry => entry["m/z"]).join("\n");
  const splitText = "<span style='white-space: pre-line; line-height: 120%;'>" + text + "</span>";
  return splitText;
 } catch (e) { datavzrd.custom_error(e, 'Sequence') }}
function custom_func_931eb662cadf04854be42715fa4be045(row) { try { 
  let value = row["ps-vs-mz"].replaceAll("\"", "&quot;");
  value = value.replaceAll("'", "\"");
  const arrayOfDicts = JSON.parse(value);
  let text = arrayOfDicts.map(entry => entry["m/z"]).join("\n");
  const splitText = "<span style='white-space: pre-line; line-height: 120%;'>" + text + "</span>";
  return splitText;
 } catch (e) { datavzrd.custom_error(e, 'm/z') }}
