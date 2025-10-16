import pikepdf

pdf = pikepdf.open("NOA 2024.pdf")
meta = pdf.docinfo

# Get modification date if it exists
mod_date = meta.get("/ModDate")

# Set creation date equal to modification date
if mod_date:
    meta["/CreationDate"] = mod_date

pdf.save(r"C:\Users\RMK\Desktop\NOA 2024.pdf")
pdf.close()
