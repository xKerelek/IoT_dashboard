import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import OpacityIcon from '@mui/icons-material/Opacity';

interface DeviceStatusCardProps {
    deviceName: string;
    temperature: number | null;
    pressure: number | null;
    humidity: number | null;
}

const DeviceStatusCard: React.FC<DeviceStatusCardProps> = ({ deviceName, temperature, pressure, humidity }) => {
    return (
        <Box
            sx={{
                backgroundColor: '#333',
                color: 'white',
                padding: '20px',
                borderRadius: '10px',
                width: '200px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                margin: '10px',
                border: '2px solid white'
            }}
        >
            <Typography variant="h6" component="div">
                {deviceName}
            </Typography>
            <hr />
            {temperature !== null && pressure !== null && humidity !== null ? (
                <Typography style={{ paddingTop: '10px' }} component="div">
                    <Typography variant="h6" component="div">
                        <DeviceThermostatIcon />
                        <span className="value">{temperature}</span> <span>&deg;C</span>
                    </Typography>
                    <Typography variant="h6" component="div">
                        <CloudUploadIcon />
                        <span className="value">{pressure}</span> hPa
                    </Typography>
                    <Typography variant="h6" component="div">
                        <OpacityIcon />
                        <span className="value">{humidity}</span>%
                    </Typography>
                </Typography>
            ) : (
                <Typography variant="h6" component="div">
                    No data
                </Typography>
            )}
            <Typography variant="body2" component="div" sx={{ marginTop: '10px', color: '#03a9f4', cursor: 'pointer' }}>
                Details
            </Typography>
        </Box>
    );
};

export default DeviceStatusCard;
