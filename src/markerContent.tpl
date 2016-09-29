<div class="marker-details">
	<div class="marker-description">
		<div class="marker-parking-name">
			{{name}}<!-- Monscone Center Parking -->
		</div>
		<div class="marker-parking-address">
			{{address}}<!-- 747 Howard St, San Francisco, CA 94103 -->
		</div>
	</div>
	<div class="marker-parameters">
		<table>
			<tr>
				<td>Open Spots</td>
				<td>Cost</td>
				<td>Distance</td>
			</tr>
			<tr>
				<td>{{spots_number}}<!-- 2 --></td>
				<td>{{cost}}<!-- .25/min --></td>
				<td>{{distance}}<!-- .05 miles --></td>
			</tr>
		</table>
	</div>
	<div class="marker-submit">
		<button onclick="onMapMarkerPayReserveClick(this)" data-location-id="{{id}}">Pay and Reserve</button>
	</div>
	<div class="marker-more">
		<span>More</span>
	</div>
</div>