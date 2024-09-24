import os
import qrcode

# Generate the QR code
img = qrcode.make("https://docs.google.com/document/d/1JHss7ifY6IhIJEKFoYd9KCVMBnXBHxwT-nIAQxJtlz0/edit?usp=sharing")

# Save the QR code image
img.save("qr.png")

# Open the image using the Windows-specific command
os.system("start qr.png")
