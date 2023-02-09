var APP_DATA = {
  "scenes": [
    {
      "id": "0-sample-pano",
      "name": "sample pano",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1664,
      "initialViewParameters": {
        "yaw": 1.6468201311223662,
        "pitch": 0.13095573503179203,
        "fov": 1.0844416498847045
      },
      "linkHotspots": [
        {
          "yaw": 3.0153358430356816,
          "pitch": 0.0876069140845317,
          "rotation": 0.7853981633974483,
          "target": "1-street-view-360"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8907091758828738,
          "pitch": 0.03136045072422533,
          "title": "Williamsburg Borough Building",
          "text": "This is where the borough does whatever the borough actually does"
        }
      ]
    },
    {
      "id": "1-street-view-360",
      "name": "Street View 360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1664,
      "initialViewParameters": {
        "yaw": -3.0803160640836875,
        "pitch": 0.09149976420901496,
        "fov": 1.0844416498847045
      },
      "linkHotspots": [
        {
          "yaw": 0.7701619818091316,
          "pitch": 0.3118007296792946,
          "rotation": 0.7853981633974483,
          "target": "0-sample-pano"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5826437008141383,
          "pitch": 0.07301416490345503,
          "title": "Williamsburg Community JSHS",
          "text": "Google Streetview is unavailable for the high school so here is the intersection of&nbsp;"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
