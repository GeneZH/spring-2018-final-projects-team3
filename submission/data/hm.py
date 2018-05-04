# REFERENCE: 
# https://eatsleepdata.com/data-viz/how-to-generate-a-geographical-heatmap-with-python.html

# Import the necessary libraries
import pandas as pd
import gmplot
# For improved table display in the notebook
from IPython.display import display

raw_data = pd.read_csv("locations.csv")

# Success! Display the first 5 rows of the dataset
# display(raw_data.head(n=5))
# display(raw_data.info())


# Let's limit the dataset to the first 15,000 records for this example
# data = raw_data.head(n=15000)

# Store our latitude and longitude

latitudes = raw_data["lat"]
longitudes = raw_data["lng"]


# Creating the location we would like to initialize the focus on. 
# Parameters: Lattitude, Longitude, Zoom
gmap = gmplot.GoogleMapPlotter(39.754136, -105.001440, 10)

# Overlay our datapoints onto the map
gmap.heatmap(latitudes, longitudes)


# Generate the heatmap into an HTML file
gmap.draw("my_heatmap.html")
